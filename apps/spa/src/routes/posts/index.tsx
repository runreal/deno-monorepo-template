import { createFileRoute } from '@tanstack/react-router'
import { trpc } from '../../main.tsx'

export const Route = createFileRoute('/posts/')({
	loader: async ({ context: { trpcQueryUtils } }) => await trpcQueryUtils.getUsers.ensureData(),
	component: Posts,
})

function Posts() {
	const data = trpc.getUsers.useQuery()

	return (
		<div>
			{data?.data?.map((user) => (
				<div key={user.id}>
					{user.name}
				</div>
			))}
		</div>
	)
}
