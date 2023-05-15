"use client";

import slugify from "slugify";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { newRecipeMutator as mutationFn } from "@/lib/mutators";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import ErrorText from "@/components/ErrorText";
import NewRecipeIngredients from "./NewRecipeIngredients";
import useNewRecipeReducer from "./useNewRecipeReducer";

export default function NewRecipePage() {
	const router = useRouter();

	const [state, dispatch] = useNewRecipeReducer();

	const mutation = useMutation({ mutationFn });

	if (mutation.isSuccess) {
		router.push("/recipe");
	}

	const onSubmit = (e: any) => {
		e.preventDefault();
		mutation.mutate({ ...state, slug: slugify(state.name) });
	};

	console.log(state);

	return (
		<Form props={{ onSubmit }}>
			<Heading>New recipe</Heading>
			<Input
				labelText="Name"
				labelProps={{ htmlFor: "name" }}
				inputProps={{
					id: "name",
					type: "text",
					onChange: (e) =>
						dispatch({
							type: "edited_name",
							newName: e.target.value,
						}),
					value: state.name,
				}}
			/>
			<TextArea
				labelText="Description"
				labelProps={{ htmlFor: "description" }}
				textAreaProps={{
					id: "description",
					onChange: (e) =>
						dispatch({
							type: "edited_description",
							newDescription: e.target.value,
						}),
					value: state.description,
				}}
			/>
			<NewRecipeIngredients
				ingredients={state.ingredients}
				dispatch={dispatch}
			/>

			<Button props={{ type: "submit" }}>Create new recipe</Button>
			{mutation.isError && (
				<ErrorText>{(mutation.error as Error).message}</ErrorText>
			)}
		</Form>
	);
}
