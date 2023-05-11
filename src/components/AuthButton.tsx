"use client";

import { useAuth0 } from "@auth0/auth0-react";

export default function AuthButton({
	children,
}: {
	children: React.ReactNode;
}) {
	const { loginWithRedirect } = useAuth0();

	return <button onClick={() => loginWithRedirect()}>{children}</button>;
}
