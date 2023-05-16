"use client";

import ErrorText from "@/components/ErrorText";
import Heading from "@/components/Heading";
import useRecipeQuery from "@/hooks/queries/useRecipeQuery";
import EditRecipeForm from "./EditRecipeForm";

export default function EditRecipe({ slug }: { slug: string }) {
	const recipeQuery = useRecipeQuery({ slug });

	const recipeNameFromSlug = slug.replace(/-/g, " ");

	if (recipeQuery.isLoading) {
		return <Heading variant="h4">Loading {recipeNameFromSlug}</Heading>;
	}

	if (recipeQuery.isError) {
		return <ErrorText>{(recipeQuery.error as Error).message}</ErrorText>;
	}

	return <EditRecipeForm recipe={recipeQuery.data} />;
}
