import { createAuthClient } from 'better-auth/react'

import { magicLinkClient } from 'better-auth/client/plugins'
export const { signIn, signOut, useSession } = createAuthClient({
	appName: 'Runreal-deno-template',
	plugins: [magicLinkClient()],
	// That's the url of the hono server
	baseURL: 'http://localhost:3001', // the base url of your auth server
})
