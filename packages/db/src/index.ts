import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema/index.ts'

const client = postgres(Deno.env.get('DATABASE_URL')!)
const db = drizzle({ client })

export { client, db, schema }
export * from './types.ts'
