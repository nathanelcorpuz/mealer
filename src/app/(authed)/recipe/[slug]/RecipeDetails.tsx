"use client";

import { Recipe } from "@/lib/types";
import Link from "next/link";
import useRecipeQuery from "@/hooks/queries/useRecipeQuery";

export default function RecipeDetails({ slug }: { slug: string }) {
	const recipe = useRecipeQuery({ slug });

	let recipeData: Recipe | undefined;

	if (recipe.isSuccess) {
		recipeData = recipe.data;
	}

	return (
		<main>
			{recipe.isLoading && <p>Loading your recipe...</p>}
			{recipe.isSuccess && recipeData !== undefined && (
				<div className="flex flex-col gap-[30px] items-start">
					<p>{recipeData.name}</p>
					<p>{recipeData.description}</p>
					<div className="flex flex-col gap-[10px]">
						<p className="text-3xl">Ingredients</p>
						{recipeData.ingredients.map(({ ingredient, quantity }) => (
							<div key={ingredient}>
								<p>{ingredient}</p>
								<p>Quantity: {quantity}</p>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-[10px]">
						<p className="text-3xl">Directions</p>
						{recipeData.directions.map((direction) => (
							<p key={direction}>{direction}</p>
						))}
					</div>
					<Link
						className="py-[8px] px-[20px] bg-gray-950 text-white"
						href={`/recipe/${slug}/edit`}
					>
						Edit
					</Link>
					<Link
						className="py-[8px] px-[20px] bg-gray-950 text-white"
						href={`/recipe/${slug}/delete`}
					>
						Delete
					</Link>
				</div>
			)}
		</main>
	);
}
