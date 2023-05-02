import { CamelCasePlugin, Kysely, PostgresDialect } from 'kysely';
import { DB as DatabaseTypes } from '@sst-kysely-prisma-boilerplate/types'
import { Pool } from 'pg'
import { Config } from 'sst/node/config';

export const db = new Kysely<DatabaseTypes>({
  dialect: new PostgresDialect({
    pool: new Pool({
      ssl: true,
      database: Config.DATABASE_NAME,
      user:Config.DATABASE_USER,
      host:Config.DATABASE_HOST,
      password:Config.DATABASE_PASS
    }),
  }),
  plugins: [new CamelCasePlugin()],
});