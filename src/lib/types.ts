export interface Credentials {
	username: string;
	password: string;
}

export interface Ingredient {
	ingredient: string;
	quantity: string;
}

export interface NewRecipe {
	name: string;
	description: string;
	directions: [string];
	ingredients: [Ingredient];
}
