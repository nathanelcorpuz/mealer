import fetcher from "./fetcher";
import {
	Credentials,
	EditFormRecipe,
	EditMeal,
	FormRecipe,
	NewMeal,
	RecipeId,
} from "./types";

export const registerMutator = async (payload: Credentials) =>
	fetcher.post("http://localhost:3000/api/auth/register", payload);

export const loginMutator = (payload: Credentials) =>
	fetcher.post("http://localhost:3000/api/auth/login", payload);

export const logoutMutator = () =>
	fetcher.get("http://localhost:3000/api/auth/logout");

export const newRecipeMutator = (payload: FormRecipe) =>
	fetcher.post("http://localhost:3000/api/recipe", payload);

export const editRecipeMutator = (payload: EditFormRecipe) =>
	fetcher.put("http://localhost:3000/api/recipe", payload);

export const deleteRecipeMutator = (payload: RecipeId) =>
	fetcher.del("http://localhost:3000/api/recipe?_id=" + payload._id);

export const newMealMutator = (payload: NewMeal) =>
	fetcher.post("http://localhost:3000/api/meal", payload);

export const editMealMutator = (payload: EditMeal) =>
	fetcher.put("http://localhost:3000/api/meal", payload);
