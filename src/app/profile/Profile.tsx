"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

export default function Profile() {
	const { user, error, isAuthenticated, isLoading } = useAuth0();
	const [isPasswordEmailSent, setIsPasswordEmailSent] = useState(false);

	if (isLoading) return <p>Loading</p>;
	if (!isAuthenticated) return <p>Not allowed</p>;
	if (error) return <p>Error: {error.message}</p>;

	const onResetPassword = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const origin = user?.sub?.split("|")[0];

		const connection =
			origin === "auth0" ? "Username-Password-Authentication" : "google-oauth2";

		const response = await fetch(
			`https://dev-0s1hn06egrzy2tv2.us.auth0.com/dbconnections/change_password`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					client_id: "sIe2HV9enudKuaVyL1rtWssk2GlrNaMp",
					email: user?.email,
					connection,
				}),
			}
		);

		if (response.ok) setIsPasswordEmailSent(true);
	};

	console.log(user);

	return (
		<div>
			<p>user name: {user?.name}</p>
			<p>user email: {user?.email}</p>
			<form onSubmit={onResetPassword}>
				<button>Reset password</button>
				{isPasswordEmailSent && <p>Email sent!</p>}
			</form>
		</div>
	);
}
