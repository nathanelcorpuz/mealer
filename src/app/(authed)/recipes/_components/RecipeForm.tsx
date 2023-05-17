"use client";

import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import FormRecipeIngredients from "../_components/FormRecipeIngredients";
import FormRecipeDirections from "../_components/FormRecipeDirections";
import { RecipeReducerAction, RecipeReducerState } from "@/lib/types";
import { Dispatch, FormEventHandler } from "react";

export default function RecipeForm({
	state,
	dispatch,
	onSubmit,
	heading,
}: {
	state: RecipeReducerState;
	dispatch: Dispatch<RecipeReducerAction>;
	onSubmit: FormEventHandler<HTMLFormElement>;
	heading: string;
}) {
	return (
		<Form props={{ onSubmit }}>
			<Heading>{heading}</Heading>
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
			<FormRecipeIngredients
				ingredients={state.ingredients}
				dispatch={dispatch}
			/>
			<FormRecipeDirections directions={state.directions} dispatch={dispatch} />
			<Button props={{ type: "submit" }}>Submit</Button>
		</Form>
	);
}
