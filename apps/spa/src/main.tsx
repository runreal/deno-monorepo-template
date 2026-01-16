import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
// Import the generated route tree
import { routeTree } from './routeTree.gen.ts'

import { queryClient, trpc, trpcClient, trpcQueryUtils } from './lib/query.ts'

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
			<trpc.Provider client={trpcClient} queryClient={queryClient}>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</trpc.Provider>
		</StrictMode>,
	)
}
