import { Pool } from 'pg';
import { TunnelCatClient } from './tunnel-cat.controller';


export class TunnelCatFactory {
    private readonly pool: Pool;

    constructor() {
        this.pool = new Pool({
            host: process.env.PG_HOST,
            port: Number(process.env.PG_PORT),
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DATABASE,
        });
    }

    async connect(): Promise<TunnelCatClient> {
        const pgClient = await this.pool.connect();
        return new TunnelCatClient(pgClient);
    }
}
