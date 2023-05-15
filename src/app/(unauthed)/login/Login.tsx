"use client";

import { useMutation } from "@tanstack/react-query";
import { loginMutator as mutationFn } from "@/lib/mutators";
import { useState } from "react";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import ErrorText from "@/components/ErrorText";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const mutation = useMutation({ mutationFn });

	if (mutation.isLoading) return <p>Logging you in</p>;

	return (
		<Form
			props={{
				onSubmit: (e: any) => {
					e.preventDefault();
					mutation.mutate({ username, password });
				},
			}}
		>
			<Input
				labelText="Username"
				labelProps={{ htmlFor: "username" }}
				inputProps={{
					type: "text",
					id: "username",
					onChange: (e: any) => setUsername(e.target.value),
					value: username,
				}}
			/>
			<Input
				labelText="Password"
				labelProps={{ htmlFor: "password" }}
				inputProps={{
					type: "password",
					id: "password",
					onChange: (e: any) => setPassword(e.target.value),
					value: password,
				}}
			/>
			<Button>Login</Button>
			{mutation.isError && (
				<ErrorText>{(mutation.error as Error).message}</ErrorText>
			)}
		</Form>
	);
}
