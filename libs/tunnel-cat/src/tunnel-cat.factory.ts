import { Pool } from 'pg'
import { Injectable } from '@nestjs/common'

import * as dotenv from 'dotenv'
import { TunnelCatClient } from './tunnel-cat.controller'

@Injectable()
export class TunnelCatFactory {
  private readonly pool: Pool

  constructor() {
    this.pool = new Pool({
      host: 'localhost',
      port: 5432,
      user: 'devuser',
      password: 'devpass',
      database: 'devdb',
    })
  }

  async connect(): Promise<TunnelCatClient> {
    dotenv.config()

    console.log('PG Config:', {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD?.toString(),
      database: process.env.PG_DATABASE,
      typeOfPassword: typeof process.env.PG_PASSWORD,
    })

    const pgClient = await this.pool.connect()
    return new TunnelCatClient(pgClient)
  }
}
