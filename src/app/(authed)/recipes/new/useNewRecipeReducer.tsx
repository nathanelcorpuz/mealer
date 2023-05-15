import { Ingredient, NewRecipe } from "@/lib/types";
import { Reducer, useReducer } from "react";

interface NewRecipeState extends Omit<NewRecipe, "slug"> {}

const initialState: NewRecipeState = {
	name: "",
	description: "",
	directions: ["Sample direction 1", "Sample direction 2"],
	ingredients: [
		{
			ingredient: "Sample ingredient 1",
			quantity: "5 pcs",
		},
		{
			ingredient: "Sample ingredient 2",
			quantity: "2 lbs",
		},
	],
};

export interface NewRecipeAction {
	type:
		| "edited_name"
		| "edited_description"
		| "added_ingredient"
		| "edited_ingredient"
		| "deleted_ingredient"
		| "added_direction"
		| "edited_direction"
		| "deleted_direction";
	newDirection?: string;
	newIngredient?: Ingredient;
	newName?: string;
	newDescription?: string;
}

const reducer: Reducer<NewRecipeState, NewRecipeAction> = (
	state: NewRecipeState,
	action: NewRecipeAction
) => {
	if (action.type === "edited_name") {
		return state;
	}
	if (action.type === "edited_description") {
		return state;
	}
	if (action.type === "added_ingredient") {
		return state;
	}
	if (action.type === "edited_ingredient") {
		return state;
	}
	if (action.type === "deleted_ingredient") {
		return state;
	}
	if (action.type === "added_direction") {
		return state;
	}
	if (action.type === "edited_direction") {
		return state;
	}
	if (action.type === "deleted_direction") {
		return state;
	}
	return state;
};

export default function useNewRecipeReducer() {
	return useReducer(reducer, initialState);
}
