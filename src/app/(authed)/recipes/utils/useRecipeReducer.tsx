import jsonCopy from "@/lib/jsonCopy";
import { Recipe, RecipeReducerAction, RecipeReducerState } from "@/lib/types";
import { Reducer, useReducer } from "react";

const initialState: RecipeReducerState = {
	name: "",
	slug: "",
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

const reducer: Reducer<RecipeReducerState, RecipeReducerAction> = (
	state: RecipeReducerState,
	action: RecipeReducerAction
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
		const stateClone: RecipeReducerState = jsonCopy(state);
		return {
			...stateClone,
			ingredients: [...stateClone.ingredients, action.newIngredient],
		};
	}
	if (action.type === "edited_ingredient" && action.targetIngredient) {
		const { targetIngredient, newIngredient } = action;
		const stateClone: RecipeReducerState = jsonCopy(state);
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
		const stateClone: RecipeReducerState = jsonCopy(state);
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
	if (action.type === "added_direction" && action.newDirection) {
		const { newDirection } = action;
		const stateClone: RecipeReducerState = jsonCopy(state);
		const newDirections = [...stateClone.directions, newDirection];
		return { ...stateClone, directions: newDirections };
	}
	if (action.type === "edited_direction" && action.targetDirection) {
		const { targetDirection, newDirection } = action;
		const stateClone: RecipeReducerState = jsonCopy(state);
		const directionsCopy = [...stateClone.directions];
		const updatedDirections = directionsCopy.map((direction) => {
			if (targetDirection && newDirection && direction === targetDirection) {
				return newDirection;
			}
			return direction;
		});
		return {
			...stateClone,
			directions: updatedDirections,
		};
	}
	if (action.type === "deleted_direction") {
		const { targetDirection } = action;
		const stateClone: RecipeReducerState = jsonCopy(state);
		const newDirections = [...stateClone.directions];
		const indexToDelete = newDirections.findIndex(
			(direction) => direction === targetDirection
		);
		newDirections.splice(indexToDelete, 1);
		return {
			...stateClone,
			directions: newDirections,
		};
	}
	return { ...state };
};

export default function useRecipeReducer(recipe?: RecipeReducerState) {
	return useReducer(reducer, recipe || initialState);
}
