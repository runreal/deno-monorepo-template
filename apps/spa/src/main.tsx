import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// Import the generated route tree
import { routeTree } from './routeTree.gen.ts'

import { httpBatchLink } from '@trpc/client'
import { createTRPCQueryUtils, createTRPCReact } from '@trpc/react-query'

import type { AppRouter } from '../../api/src/router.ts'

const queryClient = new QueryClient()
import './index.css'
export const trpc = createTRPCReact<AppRouter>({})

export const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			// and since its from the same origin, we don't need to explicitly set the full URL
			url: 'http://localhost:3001/trpc',
			fetch(url, option) {
				return fetch(url, { ...option, credentials: 'include' })
			},
		}),
	],
})

export const trpcQueryUtils = createTRPCQueryUtils({
	// @ts-expect-error: https://github.com/denoland/deno/issues/27171
	queryClient: queryClient,
	client: trpcClient,
})

// Create a new router instance
const router = createRouter({
	routeTree,
	context: {
		trpcQueryUtils,
	},
	defaultPreload: 'intent',
	defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

// Render the app
const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<StrictMode>
			{/* @ts-expect-error: */}
			<trpc.Provider client={trpcClient} queryClient={queryClient}>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</trpc.Provider>
		</StrictMode>,
	)
}
