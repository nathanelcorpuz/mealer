import useRecipeReducer from "../../utils/useRecipeReducer";
import { Recipe } from "@/lib/types";
import RecipeForm from "../../_components/RecipeForm";
import { FormEvent } from "react";

export default function EditRecipeForm({ recipe }: { recipe: Recipe }) {
	const [state, dispatch] = useRecipeReducer(recipe);

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		// mutate
	};
	return (
		<RecipeForm
			state={state}
			dispatch={dispatch}
			heading={recipe.name}
			onSubmit={onSubmit}
		/>
	);
}
