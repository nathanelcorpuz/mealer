"use client";

import { useMutation } from "@tanstack/react-query";
import { loginMutator as mutationFn } from "@/lib/mutators";
import { useState } from "react";
import Form from "@/components/Form";
import Button from "@/components/Button";
import ErrorText from "@/components/ErrorText";
import { useRouter } from "next/navigation";
import Heading from "@/components/Heading";
import Username from "../_components/Username";
import Password from "../_components/Password";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const mutation = useMutation({ mutationFn });

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
      <Heading variant="h3">Log back in</Heading>
      <Username
        disabled={mutation.isLoading || mutation.isSuccess}
        username={username}
        setUsername={setUsername}
      />
      <Password
        disabled={mutation.isLoading || mutation.isSuccess}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <Button disabled={mutation.isLoading || mutation.isSuccess}>Login</Button>
      {mutation.isError && (
        <ErrorText>{(mutation.error as Error).message}</ErrorText>
      )}
    </Form>
  );
}
