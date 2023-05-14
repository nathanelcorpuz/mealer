import fetcher from "./fetcher";

export const userQuery = async () =>
	fetcher.get("http://localhost:3000/api/user").then((res) => res.json());

export const recipeQuery = async (slug: string) =>
	fetcher
		.get("http://localhost:3000/api/recipe?slug=" + slug)
		.then((res) => res.json());
