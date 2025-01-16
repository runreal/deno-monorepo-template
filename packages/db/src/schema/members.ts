import { text, timestamp } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'
import { organizations } from './organizations.ts'
import { users } from './users.ts'

export const members = pgTable('members', {
	id: text('id').primaryKey(),
	organizationId: text('organizationId')
		.notNull()
		.references(() => organizations.id),
	userId: text('userId')
		.notNull()
		.references(() => users.id),
	role: text('role').notNull(),
	createdAt: timestamp('createdAt').notNull(),
})
