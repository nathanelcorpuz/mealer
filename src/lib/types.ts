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
