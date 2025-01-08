import { defineConfig } from 'drizzle-kit'

console.log(`Database URL: ${Deno.env.get('DATABASE_URL') ?? 'Not set'}`)

export default defineConfig({
	out: './drizzle',
	schema: './src/schema/index.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: Deno.env.get('DATABASE_URL')!,
	},
})
