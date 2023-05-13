"use client";

import useMutation from "@/hooks/useMutation";
import useQuery from "@/hooks/useQuery";
import { Query, Recipe } from "@/lib/types";
import Link from "next/link";
import { deleteRecipeMutator as mutator } from "@/lib/mutators";
import { useRouter } from "next/navigation";

export default function DeleteRecipe({ slug }: { slug: string }) {
	const recipeQuery: Query = useQuery(
		"http://localhost:3000/api/recipe?slug=" + slug
	);

	const mutation = useMutation({ mutator });

	const router = useRouter();

	let recipeData: Recipe | undefined;

	if (recipeQuery.isSuccess) recipeData = recipeQuery.data;

	if (mutation.isSuccess) router.push("/recipe");

	const onSubmit = (e: any) => {
		e.preventDefault();
		mutation.mutate({ _id: recipeData?._id });
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
