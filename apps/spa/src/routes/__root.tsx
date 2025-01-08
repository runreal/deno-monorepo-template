import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { trpcQueryUtils } from '../main.tsx'

export const Route = createRootRouteWithContext<{
	trpcQueryUtils: typeof trpcQueryUtils
}>()({
	component: () => (
		<>
			<div className='p-2 flex space-x-2'>
				<Link
					to='/'
					className='[&.active]:font-bold '
				>
					Home
				</Link>
				<Link to='/about' className='[&.active]:font-bold'>
					About
				</Link>
				<Link to='/hello' className='[&.active]:font-bold'>
					Hello
				</Link>
				<Link to='/posts' className='[&.active]:font-bold'>
					Posts
				</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	),
})
