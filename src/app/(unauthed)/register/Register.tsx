"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Credentials } from "@/lib/types";
import { registerMutator as mutationFn } from "@/lib/mutators";
import Form from "@/components/Form";
import ErrorText from "@/components/ErrorText";
import Input from "@/components/Input";
import Button from "@/components/Button";
import MutationText from "@/components/MutationText";
import { useRouter } from "next/navigation";

export default function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const mutation = useMutation({ mutationFn });

	const credentials: Credentials = { username, password };

	if (mutation.isLoading)
		return <MutationText>Creating your account...</MutationText>;

	if (mutation.isSuccess) {
		return <MutationText>Success! Redirecting to login page...</MutationText>;
	}

	return (
		<Form
			props={{
				onSubmit: async (e) => {
					e.preventDefault();
					const result = await mutation.mutateAsync(credentials);
					if (result.isSuccess) router.push("/login");
				},
			}}
		>
			<Input
				labelText="Username"
				labelProps={{ htmlFor: "username" }}
				inputProps={{
					type: "text",
					id: "username",
					onChange: (e) => setUsername(e.target.value),
				}}
			/>
			<Input
				labelText="Password"
				labelProps={{ htmlFor: "password" }}
				inputProps={{
					type: "password",
					id: "password",
					onChange: (e) => setPassword(e.target.value),
				}}
			/>
			<Button>Register</Button>
			{mutation.isError && (
				<ErrorText>{(mutation.error as Error).message}</ErrorText>
			)}
		</Form>
	);
}
