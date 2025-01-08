import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import type * as schema from './schema/index.ts'

export type InsertUser = InferInsertModel<typeof schema.users>
export type SelectUser = InferSelectModel<typeof schema.users>
