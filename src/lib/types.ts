export interface Credentials {
	username: string;
	password: string;
}

export interface UserData {
	username: string;
	recipes: Recipe[];
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

export interface Query {
	isSuccess: boolean;
	isLoading: boolean;
	isError: boolean;
	error: string;
	data: any;
}
