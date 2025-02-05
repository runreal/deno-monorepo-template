import { QueryClient } from '@tanstack/react-query'
import type { AppRouter } from '../../../api/src/router.ts'
import { createTRPCQueryUtils, createTRPCReact } from '@trpc/react-query'
import { httpBatchLink } from '@trpc/client'

export const queryClient = new QueryClient()

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
