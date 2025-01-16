import { initTRPC, TRPCError } from '@trpc/server'
import { z } from 'zod'
import { Hono } from 'hono'
import { cors } from 'npm:hono/cors'
import { trpcServer } from '@hono/trpc-server'
import { db, type InsertUser, schema } from '@workspace/db'
import { auth, type Session } from '@workspace/auth'
import { createDummyUser } from './index.ts'

const trpcApp = new Hono()

trpcApp.use(
	'/trpc/*',
	cors({
		origin: 'http://localhost:5173', // replace with your origin
		allowHeaders: ['Content-Type', 'Authorization'],
		allowMethods: ['POST', 'GET', 'OPTIONS'],
		exposeHeaders: ['Content-Length'],
		maxAge: 600,
		credentials: true,
	}),
)
interface Context {
	session?: Session
}

const t = initTRPC.context<Context>().create()

const protectedProcedure = t.procedure.use(function isAuth(opts) {
	const { ctx } = opts
	if (!ctx.session) {
		throw new TRPCError({ code: 'UNAUTHORIZED' })
	}
	return opts.next(opts)
})

const publicProcedure = t.procedure
const router = t.router

export const appRouter = router({
	hello: publicProcedure.input(z.string().nullish()).query(({ input }) => {
		return `Hello ${input ?? 'World'}!`
	}),

	getUsers: protectedProcedure.query(async () => {
		return await db.select().from(schema.users)
	}),
})

trpcApp.use(
	'/trpc/*',
	trpcServer({
		router: appRouter,
		createContext: async (opts, c) => {
			const session = await auth.api.getSession({
				headers: c.req.raw.headers,
			})
			return {
				session: session,
			}
		},
	}),
)

export { trpcApp }
export type AppRouter = typeof appRouter
