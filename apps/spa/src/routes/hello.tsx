import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hello')({
	component: RouteComponent,
})

function RouteComponent() {
	return <div className='text-4xl'>Hello "/hello"!</div>
}
