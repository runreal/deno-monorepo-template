import { text, timestamp } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'
import { organizations } from './organizations.ts'
import { users } from './users.ts'

export const invitations = pgTable('invitations', {
	id: text('id').primaryKey(),
	organizationId: text('organizationId')
		.notNull()
		.references(() => organizations.id),
	email: text('email').notNull(),
	role: text('role'),
	status: text('status').notNull(),
	expiresAt: timestamp('expiresAt').notNull(),
	inviterId: text('inviterId')
		.notNull()
		.references(() => users.id),
})
