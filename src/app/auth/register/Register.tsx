"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Credentials } from "@/lib/types";
import { registerMutator as mutationFn } from "@/lib/mutators";

export default function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const mutation = useMutation({ mutationFn });

	console.log(mutation);

	const credentials: Credentials = { username, password };

	if (mutation.isLoading) return <p>Loading</p>;

	return (
		<main>
			<form
				className="flex flex-col gap-[20px] max-w-[800px]"
				onSubmit={(e) => {
					e.preventDefault();
					mutation.mutate(credentials);
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
			{mutation.isError && <p>{(mutation.error as Error).message}</p>}
		</main>
	);
}
