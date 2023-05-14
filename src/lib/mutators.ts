import fetcher from "./fetcher";
import { Credentials, NewRecipe, Recipe, RecipeId } from "./types";

export const registerMutator = (payload: Credentials) =>
	fetcher.post("http://localhost:3000/api/auth/register", payload);

export const loginMutator = (payload: Credentials) =>
	fetcher.post("http://localhost:3000/api/auth/login", payload);

export const newRecipeMutator = (payload: NewRecipe) =>
	fetcher.post("http://localhost:3000/api/recipe", payload);

export const editRecipeMutator = (payload: Recipe) =>
	fetcher.put("http://localhost:3000/api/recipe", payload);

export const deleteRecipeMutator = (payload: RecipeId) =>
	fetcher.del("http://localhost:3000/api/recipe?_id=" + payload._id);
