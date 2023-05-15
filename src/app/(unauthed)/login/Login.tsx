"use client";

import { useMutation } from "@tanstack/react-query";
import { loginMutator as mutationFn } from "@/lib/mutators";
import { useState } from "react";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import ErrorText from "@/components/ErrorText";
import { useRouter } from "next/navigation";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const mutation = useMutation({ mutationFn });

	if (mutation.isLoading || mutation.isSuccess)
		return <p className="text-center">Logging you in</p>;

	if (mutation.isSuccess) {
		return <p className="text-center">Login success! Redirecting...</p>;
	}

	return (
		<Form
			props={{
				onSubmit: async (e: any) => {
					e.preventDefault();
					const result = await mutation.mutateAsync({ username, password });
					if (result.isSuccess) router.push("/");
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
