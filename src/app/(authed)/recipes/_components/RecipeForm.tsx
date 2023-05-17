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
import BackButton from "@/components/BackButton";

export default function RecipeForm({
	disabled,
	state,
	dispatch,
	onSubmit,
	heading,
}: {
	disabled: boolean;
	state: RecipeReducerState;
	dispatch: Dispatch<RecipeReducerAction>;
	onSubmit: FormEventHandler<HTMLFormElement>;
	heading: string;
}) {
	return (
		<Form props={{ onSubmit }}>
			<BackButton isHoverWhite />
			<Heading variant="h3">{heading}</Heading>
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
					disabled,
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
					disabled,
				}}
			/>
			<FormRecipeIngredients
				disabled={disabled}
				ingredients={state.ingredients}
				dispatch={dispatch}
			/>
			<FormRecipeDirections
				disabled={disabled}
				directions={state.directions}
				dispatch={dispatch}
			/>
			<Button props={{ type: "submit", disabled }}>Submit</Button>
		</Form>
	);
}
