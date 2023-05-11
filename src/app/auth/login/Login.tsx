"use client";

import useMutation from "@/hooks/useMutation";
import { loginMutator as mutator } from "@/lib/mutators";
import { useState } from "react";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const mutation = useMutation({ mutator });

	if (mutation.isLoading) return <p>Logging you in</p>;

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
				<button>Login</button>
			</form>
			{mutation.isError && <p>{mutation.error as string}</p>}
		</main>
	);
}
