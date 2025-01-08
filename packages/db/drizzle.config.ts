import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	out: './drizzle',
	schema: './src/schema/index.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: Deno.env.get('DATABASE_URL')!,
	},
})
