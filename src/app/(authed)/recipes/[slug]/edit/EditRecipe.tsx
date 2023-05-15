"use client";

import EditRecipeForm from "./EditRecipeForm";
import useRecipeQuery from "@/hooks/queries/useRecipeQuery";

export default function EditRecipe({ slug }: { slug: string }) {
	const recipeQuery = useRecipeQuery({ slug });

	return (
		<main>
			{recipeQuery.isLoading && <p>Loading...</p>}
			{recipeQuery.isSuccess && <EditRecipeForm recipe={recipeQuery.data} />}
		</main>
	);
}
