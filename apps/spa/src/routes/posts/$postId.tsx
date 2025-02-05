import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
	component: RouteComponent,
	loader: async ({ params }) => {
		await new Promise((resolve) => setTimeout(resolve, 500))
		return {
			post: {
				id: params.postId,
				title: `Post ${params.postId}`,
			},
		}
	},
	pendingComponent: () => <div>Loading...</div>,
})

function RouteComponent() {
	const { post } = Route.useLoaderData()
	return <div>{post.title}</div>
}
