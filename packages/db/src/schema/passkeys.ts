import { boolean, integer, text, timestamp } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'
import { users } from './users.ts'

export const passkeys = pgTable('passkeys', {
	id: text('id').primaryKey(),
	name: text('name'),
	publicKey: text('publicKey').notNull(),
	userId: text('userId')
		.notNull()
		.references(() => users.id),
	webauthnUserID: text('webauthnUserID').notNull(),
	counter: integer('counter').notNull(),
	deviceType: text('deviceType').notNull(),
	backedUp: boolean('backedUp').notNull(),
	transports: text('transports'),
	createdAt: timestamp('createdAt'),
})
