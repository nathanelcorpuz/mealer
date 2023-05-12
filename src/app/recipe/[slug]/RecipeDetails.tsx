"use client";

import useQuery from "@/hooks/useQuery";
import { Query, Recipe } from "@/lib/types";

export default function RecipeDetails({ slug }: { slug: string }) {
	const recipeQuery: Query = useQuery(
		"http://localhost:3000/api/recipe?slug=" + slug
	);

	let recipeData: Recipe | undefined;

	if (recipeQuery.isSuccess) {
		recipeData = recipeQuery.data;
	}

	return (
		<main>
			{recipeQuery.isLoading && <p>Loading your recipe...</p>}
			{recipeQuery.isSuccess && recipeData !== undefined && (
				<div>
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
				</div>
			)}
		</main>
	);
}
