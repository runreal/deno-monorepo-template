import { Hono } from 'hono'
import { cors } from 'npm:hono/cors'
import { db, schema } from '@workspace/db'
import type { InsertUser } from '@workspace/db'
import { trpcApp } from './router.ts'
import { auth } from '@workspace/auth'
const app = new Hono()
import { add } from '@workspace/lib'
export async function createDummyUser(data: InsertUser) {
	await db.insert(schema.users).values(data)
}

app.get('/', (c) => {
	return c.text('Hello Hono!')
})

app.get('add', (c) => {
	const value = add(1, 2)
	return c.json({ value })
})
app.use(
	'/api/auth/**', // or replace with "*" to enable cors for all routes
	// "*",
	cors({
		origin: 'http://localhost:5173', // replace with your origin
		allowHeaders: ['Content-Type', 'Authorization'],
		allowMethods: ['POST', 'GET', 'OPTIONS'],
		exposeHeaders: ['Content-Length'],
		maxAge: 600,
		credentials: true,
	}),
)

app.on(['POST', 'GET'], '/api/auth/**', (c) => {
	return auth.handler(c.req.raw)
})

app.route('/', trpcApp)

const port = 3001
console.log(`Server is running on http://localhost:${port}`)
console.log(`Database URL: ${Deno.env.get('DATABASE_URL') ?? 'Not set'}`)

Deno.serve({ port }, app.fetch)
