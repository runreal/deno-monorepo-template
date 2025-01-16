import { text } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'
import { users } from './users.ts'

export const twoFactors = pgTable('twoFactors', {
	id: text('id').primaryKey(),
	secret: text('secret').notNull(),
	backupCodes: text('backupCodes').notNull(),
	userId: text('userId')
		.notNull()
		.references(() => users.id),
})
