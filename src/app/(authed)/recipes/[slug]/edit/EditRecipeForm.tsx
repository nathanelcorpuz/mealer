import Form from "@/components/Form";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import useRecipeReducer from "../../utils/useRecipeReducer";
import { Recipe } from "@/lib/types";
import FormRecipeIngredients from "../../_components/FormRecipeIngredients";
import FormRecipeDirections from "../../_components/FormRecipeDirections";
import Button from "@/components/Button";

export default function EditRecipeForm({ recipe }: { recipe: Recipe }) {
	const [state, dispatch] = useRecipeReducer(recipe);
	// mutate states should be in this component
	// query states are handled in parent component
	return (
		<Form>
			<Heading variant="h4">Editing {recipe.name}</Heading>
			<Input
				labelText="New name"
				labelProps={{ htmlFor: "name" }}
				inputProps={{
					type: "text",
					id: "name",
					value: state.name,
					onChange: (e) =>
						dispatch({ type: "edited_name", newName: e.target.value }),
				}}
			/>
			<Input
				labelText="New description"
				labelProps={{ htmlFor: "description" }}
				inputProps={{
					type: "text",
					id: "description",
					value: state.description,
					onChange: (e) =>
						dispatch({
							type: "edited_description",
							newDescription: e.target.value,
						}),
				}}
			/>
			<FormRecipeIngredients
				ingredients={state.ingredients}
				dispatch={dispatch}
			/>
			<FormRecipeDirections directions={state.directions} dispatch={dispatch} />
			<Button>Submit edits</Button>
		</Form>
	);
}
