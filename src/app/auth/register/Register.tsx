"use client";

import useMutation from "@/hooks/useMutation";
import { useState } from "react";

export default function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const mutation = useMutation({
		mutator: ({ username, password }: { username: string; password: string }) =>
			fetch("http://localhost:3000/api/auth/register", {
				method: "POST",
				body: JSON.stringify({
					username,
					password,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}),
	});

	if (mutation.isLoading) return <p>Loading</p>;

	return (
		<main>
			<form
				className="flex flex-col gap-[20px] max-w-[800px]"
				onSubmit={(e) => {
					e.preventDefault();
					mutation.mutate({ username, password });
				}}
			>
				<div className="flex flex-col">
					<label htmlFor="username">Username</label>
					<input
						className="border border-gray-600"
						type="text"
						id="username"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="password">Password</label>
					<input
						className="border border-gray-600"
						type="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button>Register</button>
			</form>
			{mutation.isError && <p>{mutation.error as string}</p>}
		</main>
	);
}
