"use client";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton({ children }: { children: React.ReactNode }) {
	const { logout } = useAuth0();

	if (typeof window === undefined) return null;

	return (
		<button
			onClick={() =>
				logout({ logoutParams: { returnTo: window.location.origin } })
			}
		>
			{children}
		</button>
	);
}
