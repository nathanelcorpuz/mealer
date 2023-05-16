import { DayOfWeek, TimeOfDay } from "@/db/models/Meal";
import { Types } from "mongoose";

export interface Credentials {
	username: string;
	password: string;
}

export interface UserData {
	username: string;
	recipes: Recipe[];
}

export interface Ingredient {
	_id: string | undefined;
	ingredient: string;
	quantity: string;
}

export interface Recipe {
	_id: string | undefined;
	name: string;
	slug: string;
	description: string;
	directions: string[];
	ingredients: Ingredient[];
}

export interface FormIngredient {
	ingredient: string;
	quantity: string;
}

export interface FormRecipe {
	name: string;
	slug: string;
	description: string;
	directions: string[];
	ingredients: FormIngredient[];
}

export interface RecipeId {
	_id: string;
}

export interface NewMeal {
	recipeId: Types.ObjectId;
	timeOfDay: TimeOfDay;
	dayOfWeek: DayOfWeek;
	notes: string;
}

export type HeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface RecipeReducerState {
	name: string;
	description: string;
	ingredients: FormIngredient[];
	directions: string[];
}

export interface RecipeReducerAction {
	type:
		| "edited_name"
		| "edited_description"
		| "added_ingredient"
		| "edited_ingredient"
		| "deleted_ingredient"
		| "added_direction"
		| "edited_direction"
		| "deleted_direction";
	targetDirection?: string;
	newDirection?: string;
	targetIngredient?: FormIngredient;
	newIngredient?: FormIngredient;
	newName?: string;
	newDescription?: string;
}
