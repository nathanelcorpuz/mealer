"use client";

import useQuery from "@/hooks/useQuery";

export default function Profile() {
	const query = useQuery("http://localhost:3000/api/user?preference=sample");
	console.log("\n\n");
	console.log("query");
	console.log(query);
	console.log("\n\n");
	return (
		<main>
			<p>Here's your profile</p>
			<p></p>
		</main>
	);
}
