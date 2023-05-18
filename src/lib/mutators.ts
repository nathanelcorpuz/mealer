import fetcher from "./fetcher";
import {
	Credentials,
	EditFormRecipe,
	EditMeal,
	FormRecipe,
	MealId,
	NewMeal,
	RecipeId,
} from "./types";

const URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000/"
		: "https://nat-mealer.vercel.app/";

export const registerMutator = async (payload: Credentials) =>
	fetcher.post(`${URL}api/auth/register`, payload);

export const loginMutator = (payload: Credentials) =>
	fetcher.post(`${URL}api/auth/login`, payload);

export const logoutMutator = () => fetcher.get(`${URL}api/auth/logout`);

export const newRecipeMutator = (payload: FormRecipe) =>
	fetcher.post(`${URL}api/recipe`, payload);

export const editRecipeMutator = (payload: EditFormRecipe) =>
	fetcher.put(`${URL}api/recipe`, payload);

export const deleteRecipeMutator = (payload: RecipeId) =>
	fetcher.del(`${URL}api/recipe?_id=${payload._id}`);

export const newMealMutator = (payload: NewMeal) =>
	fetcher.post(`${URL}api/meal`, payload);

export const editMealMutator = (payload: EditMeal) =>
	fetcher.put(`${URL}api/meal`, payload);

export const deleteMealMutator = (payload: MealId) =>
	fetcher.del(`${URL}api/meal?_id=${payload._id}`);
