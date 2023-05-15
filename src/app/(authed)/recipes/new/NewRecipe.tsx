"use client";

import slugify from "slugify";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { newRecipeMutator as mutationFn } from "@/lib/mutators";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import ErrorText from "@/components/ErrorText";
import ClickableListItem from "@/components/ClickableListItem";
import NewRecipeIngredients from "./NewRecipeIngredients";

export default function NewRecipePage() {
	const router = useRouter();

	const [name, setName] = useState("");

	const [description, setDescription] = useState("");

	const [directions, setDirections] = useState([
		"Sample direction 1",
		"Sample direction 2",
	]);

	const [ingredients, setIngredients] = useState([
		{
			ingredient: "Sample ingredient 1",
			quantity: "5 pcs",
		},
		{
			ingredient: "Sample ingredient 2",
			quantity: "2 lbs",
		},
	]);

	const mutation = useMutation({ mutationFn });

	if (mutation.isSuccess) {
		router.push("/recipe");
	}

	const onSubmit = (e: any) => {
		e.preventDefault();
		mutation.mutate({
			name,
			description,
			directions,
			ingredients,
			slug: slugify(name),
		});
	};

	return (
		<Form props={{ onSubmit }}>
			<Heading>New recipe</Heading>
			<Input
				labelText="Name"
				labelProps={{ htmlFor: "name" }}
				inputProps={{
					id: "name",
					type: "text",
					onChange: (e) => setName(e.target.value),
				}}
			/>
			<TextArea
				labelText="Description"
				labelProps={{ htmlFor: "description" }}
				textAreaProps={{
					id: "description",
					onChange: (e) => setDescription(e.target.value),
				}}
			/>
			<NewRecipeIngredients ingredients={ingredients} />

			<Button props={{ type: "submit" }}>Create new recipe</Button>
			{mutation.isError && (
				<ErrorText>{(mutation.error as Error).message}</ErrorText>
			)}
		</Form>
	);
}
