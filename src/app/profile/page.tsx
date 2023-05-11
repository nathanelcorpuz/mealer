"use server";

import Profile from "./Profile";

export default async function ProfilePage() {
	const response = await fetch("http://localhost:3000/api/sample-route");
	const result = await response.json();

	console.log("\n\n");
	console.log("result");
	console.log(result);
	console.log("\n\n");

	return <Profile />;
}
