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

    const pgClient = await this.pool.connect()
    return new TunnelCatClient(pgClient)
  }
}
