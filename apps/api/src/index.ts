import { Hono } from 'hono'
import { cors } from 'npm:hono/cors'
import { add } from '@workspace/add'
import { trpcServer } from '@hono/trpc-server'
import { db, schema } from '@workspace/db'
import type { InsertUser } from '@workspace/db'
import { appRouter } from './router.ts'

const app = new Hono()

console.log(Deno.env.get('DATABASE_URL'))

export async function createDummyUser(data: InsertUser) {
	await db.insert(schema.users).values(data)
}

app.get('/', (c) => {
	return c.text('Hello Hono!')
})

app.get('/add', (c) => {
	return c.json({ result: add(1, 2) })
})

app.use(cors())

app.use(
	'/trpc/*',
	trpcServer({
		router: appRouter,
	}),
)

const port = 3001
console.log(`Server is running on http://localhost:${port}`)

Deno.serve({ port }, app.fetch)
