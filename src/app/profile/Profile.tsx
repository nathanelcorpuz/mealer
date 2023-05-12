"use client";

import { UserContext } from "@/providers/UserProvider";
import { useContext } from "react";

export default function Profile() {
	const userQuery = useContext(UserContext);
	return (
		<main>
			<p>Here's your profile</p>
			<p></p>
		</main>
	);
}
