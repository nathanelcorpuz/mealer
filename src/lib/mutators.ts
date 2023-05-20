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
import { url } from "./url";

export const registerMutator = async (payload: Credentials) =>
  fetcher.post(`${url}api/auth/register`, payload);

export const loginMutator = (payload: Credentials) =>
  fetcher.post(`${url}api/auth/login`, payload);

export const logoutMutator = () => fetcher.get(`${url}api/auth/logout`);

export const newRecipeMutator = (payload: FormRecipe) =>
  fetcher.post(`${url}api/recipe`, payload);

export const editRecipeMutator = (payload: EditFormRecipe) =>
  fetcher.put(`${url}api/recipe`, payload);

export const deleteRecipeMutator = (payload: RecipeId) =>
  fetcher.del(`${url}api/recipe?_id=${payload._id}`);

export const newMealMutator = (payload: NewMeal) =>
  fetcher.post(`${url}api/meal`, payload);

export const editMealMutator = (payload: EditMeal) =>
  fetcher.put(`${url}api/meal`, payload);

export const deleteMealMutator = (payload: MealId) =>
  fetcher.del(`${url}api/meal?_id=${payload._id}`);
