"use client";

import { Query } from "@/lib/types";
import useQuery from "@/hooks/useQuery";
import EditRecipeForm from "./EditRecipeForm";

export default function EditRecipe({ slug }: { slug: string }) {
	const recipeQuery: Query = useQuery(
		"http://localhost:3000/api/recipe?slug=" + slug
	);

	return (
		<main>
			{recipeQuery.isLoading && <p>Loading...</p>}
			{recipeQuery.isSuccess && <EditRecipeForm recipe={recipeQuery.data} />}
		</main>
	);
}
