import fetcher from "./fetcher";
import { url } from "./url";

export const userQuery = async () => fetcher.get(`${url}api/user`);

export const recipeQuery = async (slug: string) =>
	fetcher.get(`${url}api/recipe?slug=${slug}`);

export const mealQuery = async (_id: string) =>
	fetcher.get(`${url}api/meal?_id=${_id}`);
