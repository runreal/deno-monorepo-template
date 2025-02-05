import { createFileRoute } from '@tanstack/react-router'
import { trpc } from '../../lib/query.ts'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
	loader: async ({ context: { trpcQueryUtils } }) => await trpcQueryUtils.getUsers.ensureData(),
	component: Posts,
})

function Posts() {
	const data = trpc.getUsers.useQuery()

	return (
		<div>
			{data?.data?.map((user) => (
				<Link to={'/posts/$postId'} params={{ postId: user.id }} key={user.id}>
					{user.name}
				</Link>
			))}
		</div>
	)
}
