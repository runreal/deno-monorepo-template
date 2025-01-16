import { createLazyFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
	component: Index,
})

function Index() {
	return (
		<div className='p-2'>
			<h3 className='text-lg text-blue-900'>Welcome Home!</h3>
			<Link to='/posts'>Go to Post (protected trpc query)</Link>
		</div>
	)
}
