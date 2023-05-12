export interface Credentials {
	username: string;
	password: string;
}

export interface UserData {
	username: string;
	recipes: [Recipe];
}

export interface Ingredient {
	ingredient: string;
	quantity: string;
}

export interface Recipe {
	name: string;
	slug: string;
	description: string;
	directions: [string];
	ingredients: [Ingredient];
}

export interface Query {
	isSuccess: boolean;
	isLoading: boolean;
	isError: boolean;
	error: string;
	data: any;
}
