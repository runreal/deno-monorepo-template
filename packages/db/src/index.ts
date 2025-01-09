import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema/index.ts'

const client: postgres.Sql = postgres(Deno.env.get('DATABASE_URL')!)

const db: PostgresJsDatabase<Record<string, never>> & {
	$client: postgres.Sql
} = drizzle({ client })

export { client, db, schema }
export * from 'drizzle-orm'
export * from './types.ts'
