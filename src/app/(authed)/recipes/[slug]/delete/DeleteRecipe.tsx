"use client";

import { useMutation } from "@tanstack/react-query";
import { Recipe } from "@/lib/types";
import Link from "next/link";
import { deleteRecipeMutator as mutationFn } from "@/lib/mutators";
import { useRouter } from "next/navigation";
import useRecipeQuery from "@/hooks/queries/useRecipeQuery";

export default function DeleteRecipe({ slug }: { slug: string }) {
	const recipeQuery = useRecipeQuery({ slug });

	const mutation = useMutation({ mutationFn });

	const router = useRouter();

	let recipeData: Recipe | undefined;

	if (recipeQuery.isSuccess) recipeData = recipeQuery.data;

	if (mutation.isSuccess) router.push("/recipe");

	const onSubmit = (e: any) => {
		e.preventDefault();
		if (recipeData?._id) mutation.mutate({ _id: recipeData._id });
	};

	return (
		<main>
			{recipeQuery.isLoading && <p>Loading recipe....</p>}
			{recipeQuery.isSuccess && recipeData !== undefined && (
				<div className="flex flex-col items-start">
					<p>Delete this recipe?</p>
					<p>{recipeData.name}</p>
					<form onSubmit={onSubmit}>
						<button
							className="px-4 py-2 bg-red-500 text-white"
							disabled={mutation.isLoading}
						>
							Delete
						</button>
					</form>
					<Link
						href={`/recipe/${slug}`}
						className="px-4 py-2 border-2 border-gray-950 block"
					>
						Back
					</Link>
				</div>
			)}
		</main>
	);
}
