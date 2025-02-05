import { createRootRouteWithContext, Outlet, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { useSession } from '../lib/auth-client.ts'
import { useEffect } from 'react'
import { trpcQueryUtils } from '../lib/query.ts'
export const Route = createRootRouteWithContext<{
	trpcQueryUtils: typeof trpcQueryUtils
}>()({
	component: RootComponent,
})

function RootComponent() {
	const { data, isPending, error } = useSession()
	const navigate = useNavigate()
	console.log('data', data, 'isPending', isPending)
	useEffect(() => {
		if (isPending) return
		if (!data?.session) {
			if (!location.pathname.includes('/login')) {
				navigate({ to: '/login' })
				return
			}
		}
	}, [data, navigate, isPending])

	return (
		<>
			<Outlet />
			<TanStackRouterDevtools />
			<ReactQueryDevtools initialIsOpen={false} />

			<TanStackRouterDevtools />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	)
}
