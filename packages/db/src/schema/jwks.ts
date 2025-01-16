import { text, timestamp } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'

export const jwks = pgTable('jwks', {
	id: text('id').primaryKey(),
	publicKey: text('publicKey').notNull(),
	privateKey: text('privateKey').notNull(),
	createdAt: timestamp('createdAt').notNull(),
})
