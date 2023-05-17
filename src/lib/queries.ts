import fetcher from "./fetcher";

export const userQuery = async () =>
	fetcher.get("http://localhost:3000/api/user");

export const recipeQuery = async (slug: string) =>
	fetcher.get("http://localhost:3000/api/recipe?slug=" + slug);

export const mealQuery = async (_id: string) =>
	fetcher.get("http://localhost:3000/api/meal?_id=" + _id);
