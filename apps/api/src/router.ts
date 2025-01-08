import { initTRPC } from '@trpc/server'
import { z } from 'zod'

import { db, type InsertUser, schema } from '@workspace/db'
import { createDummyUser } from './index.ts'

const t = initTRPC.create()

const publicProcedure = t.procedure
const router = t.router

export const appRouter = router({
	hello: publicProcedure.input(z.string().nullish()).query(({ input }) => {
		return `Hello ${input ?? 'World'}!`
	}),

	createUser: publicProcedure.mutation(async () => {
		const dummyUser: InsertUser = {
			id: '1',
			email: 'test@test.com',
			name: 'Test User',
			emailVerified: true,
			createdAt: new Date(),
			updatedAt: new Date(),
		}
		await createDummyUser(dummyUser)

		return 'User created'
	}),
	getUsers: publicProcedure.query(async () => {
		return await db.select().from(schema.users)
	}),
})

export type AppRouter = typeof appRouter
