export interface Credentials {
	username: string;
	password: string;
}

export interface UserData {
	username: string;
	recipes: Recipe[];
	meals: Meal[];
}

export interface Ingredient {
	_id: string;
	ingredient: string;
	quantity: string;
}

export interface Recipe {
	_id: string;
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

export type TimeOfDay =
	| "breakfast"
	| "brunch"
	| "lunch"
	| "afternoon"
	| "dinner"
	| "midnight";

export type DayOfWeek =
	| "sunday"
	| "monday"
	| "tuesday"
	| "wednesday"
	| "thursday"
	| "friday"
	| "saturday";

export interface NewMeal {
	recipeId: string;
	timeOfDay: TimeOfDay;
	dayOfWeek: DayOfWeek;
	notes: string;
}

export interface Meal {
	_id: string;
	recipeId: Recipe;
	timeOfDay: TimeOfDay;
	dayOfWeek: DayOfWeek;
	notes: string;
}

export interface DropdownSelection {
	value: string;
	label: string;
}

export interface MealPlan {
	dayOfWeek: DayOfWeek;
	meals: Meal[];
}

export type PasswordValidation = (
	| undefined
	| "min"
	| "uppercase"
	| "lowercase"
	| "digits"
	| "spaces"
	| "symbols"
)[];
