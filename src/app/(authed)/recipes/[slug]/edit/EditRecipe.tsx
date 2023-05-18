"use client";

import ErrorText from "@/components/ErrorText";
import Heading from "@/components/Heading";
import useRecipeQuery from "@/hooks/queries/useRecipeQuery";
import EditRecipeForm from "./EditRecipeForm";

export default function EditRecipe({ slug }: { slug: string }) {
	const recipeQuery = useRecipeQuery({ slug });

	const recipeNameFromSlug = slug.replace(/-/g, " ");

	if (recipeQuery.isLoading) {
		return (
			<Heading variant="h4" classOverrides="text-center">
				Loading {recipeNameFromSlug}
			</Heading>
		);
	}

	if (recipeQuery.isError) {
		return <ErrorText>{(recipeQuery.error as Error).message}</ErrorText>;
	}

	const { _id, name, description, directions, ingredients } = recipeQuery.data;

	const recipe = { name, description, directions, ingredients, slug };

	return <EditRecipeForm _id={_id} recipe={recipe} />;
}
