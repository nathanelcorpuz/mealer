import fetcher from "./fetcher";
import { Credentials, NewRecipe } from "./types";

export const registerMutator = (payload: Credentials) =>
	fetcher.post("http://localhost:3000/api/auth/register", payload);

export const loginMutator = (payload: Credentials) =>
	fetcher.post("http://localhost:3000/api/auth/login", payload);

export const recipeMutator = (payload: NewRecipe) =>
	fetcher.post("http://localhost:3000/api/recipe", payload);
