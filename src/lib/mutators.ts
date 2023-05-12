import fetcher from "./fetcher";
import { Credentials, Recipe } from "./types";

export const registerMutator = (payload: Credentials) =>
	fetcher.post("http://localhost:3000/api/auth/register", payload);

export const loginMutator = (payload: Credentials) =>
	fetcher.post("http://localhost:3000/api/auth/login", payload);

export const newRecipeMutator = (payload: Recipe) =>
	fetcher.post("http://localhost:3000/api/recipe", payload);

export const editRecipeMutator = (payload: Recipe) =>
	fetcher.put("http://localhost:3000/api/recipe", payload);
