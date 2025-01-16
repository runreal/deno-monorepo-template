import { boolean, text, timestamp } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull().unique(),
	emailVerified: boolean('emailVerified').notNull(),
	image: text('image'),
	createdAt: timestamp('createdAt').notNull(),
	updatedAt: timestamp('updatedAt').notNull(),
	twoFactorEnabled: boolean('twoFactorEnabled'),
	role: text('role'),
	banned: boolean('banned'),
	banReason: text('banReason'),
	banExpires: timestamp('banExpires'),
})
