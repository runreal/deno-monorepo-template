import { createFileRoute } from "@tanstack/react-router";
import { signIn } from "../lib/auth-client.ts";

export const Route = createFileRoute("/login")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<button
				type="button"
				onClick={async () => {
					await signIn.magicLink({
						email: "dev@runreal.dev",
						// Use the dashboard url
						callbackURL: "http://localhost:5173/",
					});
				}}
			>
				{" "}
				Send Magic Link{" "}
			</button>
		</div>
	);
}
