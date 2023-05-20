"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Credentials } from "@/lib/types";
import { registerMutator as mutationFn } from "@/lib/mutators";
import Form from "@/components/Form";
import ErrorText from "@/components/ErrorText";
import Button from "@/components/Button";
import MutationText from "@/components/MutationText";
import { useRouter } from "next/navigation";
import Password from "../_components/Password";
import Username from "../_components/Username";
import validatePassword from "./validatePassword";
import PasswordValidation from "./PasswordValidation";
import Heading from "@/components/Heading";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const passwordValidation = validatePassword(password);

  const passwordsMismatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password !== confirmPassword;

  const mutation = useMutation({ mutationFn });

  const credentials: Credentials = { username, password };

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
      <Heading variant="h3">Create new account</Heading>
      <Username
        disabled={mutation.isLoading}
        username={username}
        setUsername={setUsername}
      />
      <Password
        disabled={mutation.isLoading}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <PasswordValidation validation={passwordValidation} />
      <Password
        disabled={mutation.isLoading}
        password={confirmPassword}
        setPassword={setConfirmPassword}
        showPassword={showConfirmPassword}
        setShowPassword={setShowConfirmPassword}
        label="Confirm Password"
      />
      {passwordsMismatch ? (
        <p className="text-orange-600 italic text-sm">Passwords must match</p>
      ) : null}
      <Button disabled={mutation.isLoading}>Register</Button>
      {mutation.isError && (
        <ErrorText>{(mutation.error as Error).message}</ErrorText>
      )}
    </Form>
  );
}
