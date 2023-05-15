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

export interface NewIngredient {
	ingredient: string;
	quantity: string;
}

export interface NewRecipe {
	name: string;
	slug: string;
	description: string;
	directions: string[];
	ingredients: NewIngredient[];
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

export interface NewIngredient extends Omit<Ingredient, "_id"> {}

export interface IngredientToEdit extends NewIngredient {}

export interface NewRecipeState extends Omit<NewRecipe, "slug"> {}

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
	directionToEdit?: string;
	newDirection?: string;
	ingredientToEdit?: IngredientToEdit;
	newIngredient?: NewIngredient;
	newName?: string;
	newDescription?: string;
}
