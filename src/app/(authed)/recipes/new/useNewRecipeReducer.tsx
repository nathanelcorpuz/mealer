import jsonCopy from "@/lib/jsonCopy";
import { NewRecipeAction, NewRecipeState } from "@/lib/types";
import { Reducer, useReducer } from "react";

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

const reducer: Reducer<NewRecipeState, NewRecipeAction> = (
	state: NewRecipeState,
	action: NewRecipeAction
) => {
	if (action.type === "edited_name") {
		return {
			...state,
			name: action.newName === undefined ? "" : action.newName,
		};
	}
	if (action.type === "edited_description") {
		return {
			...state,
			description:
				action.newDescription === undefined ? "" : action.newDescription,
		};
	}
	if (action.type === "added_ingredient" && action.newIngredient) {
		const stateClone: NewRecipeState = jsonCopy(state);
		return {
			...stateClone,
			ingredients: [...stateClone.ingredients, action.newIngredient],
		};
	}
	if (action.type === "edited_ingredient" && action.targetIngredient) {
		const { targetIngredient, newIngredient } = action;
		const stateClone: NewRecipeState = jsonCopy(state);
		const ingredientsCopy = [...stateClone.ingredients];
		const updatedIngredients = ingredientsCopy.map(
			({ quantity, ingredient }) => {
				if (
					targetIngredient &&
					newIngredient &&
					quantity === targetIngredient.quantity &&
					ingredient === targetIngredient.ingredient
				) {
					return newIngredient;
				}
				return { quantity, ingredient };
			}
		);
		return {
			...stateClone,
			ingredients: updatedIngredients,
		};
	}
	if (action.type === "deleted_ingredient" && action.targetIngredient) {
		const { targetIngredient } = action;
		const stateClone: NewRecipeState = jsonCopy(state);
		const newIngredients = [...stateClone.ingredients];
		const indexToDelete = newIngredients.findIndex(
			({ quantity, ingredient }) =>
				quantity === targetIngredient.quantity &&
				ingredient === targetIngredient.ingredient
		);
		newIngredients.splice(indexToDelete, 1);
		return {
			...stateClone,
			ingredients: newIngredients,
		};
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
