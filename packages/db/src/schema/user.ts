import { boolean, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

// Here we have a slow-type see : https://jsr.io/docs/about-slow-types#explicit-types
export const users = pgTable('users', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull().unique(),
	emailVerified: boolean('emailVerified').notNull(),
	image: text('image'),
	createdAt: timestamp('createdAt').notNull(),
	updatedAt: timestamp('updatedAt').notNull(),
})
