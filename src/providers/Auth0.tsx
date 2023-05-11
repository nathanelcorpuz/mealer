"use client";

import { Auth0Provider } from "@auth0/auth0-react";

export default function Auth0({ children }: { children: React.ReactNode }) {
	return (
		<Auth0Provider
			domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
			clientId={process.env.NEXT_PUBLIC_AUTH0_ID as string}
			authorizationParams={{
				redirect_uri: "http://localhost:3000",
			}}
		>
			{children}
		</Auth0Provider>
	);
}
