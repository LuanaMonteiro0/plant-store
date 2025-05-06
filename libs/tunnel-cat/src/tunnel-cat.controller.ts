import type { PoolClient, QueryResultRow } from 'pg'

interface QueryParams {
  query: string
  values?: Record<string, any>
}

interface QueryWithPaginationParams {
  query: string
  values?: { pageSize?: number; pageNumber?: number } & Record<string, any>
  pageSize?: number
  pageNumber?: number
}

interface QueryWithoutFormatParams {
  query: string
  values?: any[]
}

interface Pagination {
  totalItems: number
  totalPages: number
}

export interface PaginationResultWithTotals<T> {
  rows: T
  pagination: Pagination
}

interface QueryFilterInterface {
  joinClause: string
  whereClause: string
  aggregationClause: string
  groupingClause: string
}

export abstract class QueryFilterBuilder {
  abstract buildJoinClause(): string

  abstract buildWhereClause(): string

  abstract buildGroupingClause(): string

  abstract buildAggregationClause(): string

  build(): QueryFilterInterface {
    return {
      joinClause: this.buildJoinClause(),
      whereClause: this.buildWhereClause(),
      groupingClause: this.buildGroupingClause(),
      aggregationClause: this.buildAggregationClause(),
    }
  }
}

export class TunnelCatClient {
  private timezoneSet = false

  constructor(private readonly pgClient: PoolClient) {}

  async startTransaction() {
    await this.pgClient.query({ text: 'BEGIN;' })
  }

  async commitTransaction() {
    await this.pgClient.query({ text: 'COMMIT;' })
  }

  async rollbackTransaction() {
    await this.pgClient.query({ text: 'ROLLBACK;' })
  }

  async query<T extends QueryResultRow>(params: QueryParams): Promise<T[]> {
    await this.setTimezone('America/Sao_Paulo')

    const { query, values } = this.formatQuery(params.query, params.values)

    const response = await this.pgClient.query<T>({
      text: query,
      values,
    })

    console.log(`Query successfully executed (${response?.rowCount} rows)`)

    return response.rows
  }

  async queryWithPagination<T extends QueryResultRow>(
    params: QueryWithPaginationParams,
  ): Promise<PaginationResultWithTotals<T[]>> {
    await this.setTimezone('America/Sao_Paulo')

    const pageNumber = ((params.pageNumber || 1) - 1) * (params.pageSize || 100)
    const pagination = `LIMIT ${params.pageSize || 100} OFFSET ${pageNumber}`

    const formattedQuery = `
            WITH original_query AS (
                ${params.query}
            ),
            total_count AS (
                SELECT 
                COUNT(*) AS totalItems, 
                CEIL(COUNT(*)::DECIMAL / $itemsPerPage) AS totalPages 
                FROM original_query
            ),
            paged_query AS (
                SELECT * FROM original_query
                ${pagination}
            )
            SELECT paged_query.*, total_count.totalItems AS "totalItems", total_count.totalPages AS "totalPages"
            FROM paged_query
            CROSS JOIN total_count;
            `

    const { query, values } = this.formatQuery(formattedQuery, {
      ...params.values,
      itemsPerPage: params.pageSize || 100,
    })

    const response = await this.pgClient.query<T>({
      text: query,
      values,
    })

    const paginationItemsCount: Pagination = {
      totalItems: response?.rows[0]?.totalItems || 0,
      totalPages: response?.rows[0]?.totalPages || 0,
    }

    const responseFormatted = response?.rows?.map((item) => {
      delete item.totalItems
      delete item.totalPages
      return item
    })

    return { rows: responseFormatted, pagination: paginationItemsCount }
  }

  async queryWithoutFormat<T extends QueryResultRow>(params: QueryWithoutFormatParams): Promise<T[]> {
    await this.setTimezone('America/Sao_Paulo')

    const response = await this.pgClient.query<T>({
      text: params.query,
      values: params.values,
    })

    return response.rows
  }

  release() {
    this.pgClient.release()
  }

  private async setTimezone(timezone: string) {
    if (!this.timezoneSet) {
      await this.pgClient.query({
        text: `SET timezone TO '${timezone}'`,
      })
      this.timezoneSet = true
    }
  }

  private formatQuery(query: string, values?: Record<string, any>) {
    const unorderedEntries = Object.entries(values || {})
    const entries = unorderedEntries.sort((a, b) => b[0].length - a[0].length)

    let position = 0
    const pgValues: any[] = []
    let formattedQuery = query
    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i]

      if (formattedQuery.includes(`$${key}`) && value !== undefined) {
        formattedQuery = formattedQuery.replaceAll(`$${key}`, `$${position + 1}`)
        pgValues.push(value)
        position += 1
      }
    }

    return { query: formattedQuery, values: pgValues }
  }
}
