import { createFileRoute } from '@tanstack/react-router'
import { signIn } from '../lib/auth-client.ts'
import { add } from '@workspace/lib'
import { useState } from 'react'

export const Route = createFileRoute('/login')({
	component: RouteComponent,
})

function RouteComponent() {
	const [number, setNumber] = useState(0)

	const addNumbers = () => {
		setNumber(add(1, number))
	}

	return (
		<div className='flex h-full justify-center items-center'>
			<div className='grid grid-cols-1 gap-4'>
				<button
					type='button'
					onClick={async () => {
						await signIn.magicLink({
							email: 'dev@runreal.dev',
							// Use the dashboard url
							callbackURL: 'http://localhost:5173/',
						})
					}}
				>
					{' '}
					Send Magic Link{' '}
				</button>
				<button type='button' onClick={() => addNumbers()}>
					Number: {number}
				</button>
			</div>
		</div>
	)
}
