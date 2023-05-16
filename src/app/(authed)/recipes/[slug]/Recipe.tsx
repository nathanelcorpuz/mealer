"use client";

import { Recipe } from "@/lib/types";
import Link from "next/link";
import useRecipeQuery from "@/hooks/queries/useRecipeQuery";
import Heading from "@/components/Heading";
import Button from "@/components/Button";

export default function Recipe({ slug }: { slug: string }) {
	const recipe = useRecipeQuery({ slug });

	let recipeData: Recipe | undefined;

	if (recipe.isSuccess) {
		recipeData = recipe.data;
	}

	return (
		<section className="max-w-[550px] mx-auto p-4 sm:p-8 border border-gray-300 rounded-md">
			{recipe.isLoading && (
				<Heading variant="h5">Loading {slug.replace(/-/g, " ")}...</Heading>
			)}
			{recipe.isSuccess && recipeData !== undefined && (
				<div className="flex flex-col gap-[30px] items-start">
					<Heading variant="h1">{recipeData.name}</Heading>
					<p>{recipeData.description}</p>
					<div className="flex flex-col gap-[10px] w-[100%]">
						<Heading variant="h3">Ingredients</Heading>
						{recipeData.ingredients.map(({ ingredient, quantity }) => (
							<div
								key={ingredient}
								className="flex justify-between border-b border-gray-300 py-2 gap-1"
							>
								<p>{ingredient}</p>
								<p className="">{quantity}</p>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-[10px] w-[100%]">
						<Heading variant="h3">Directions</Heading>
						{recipeData.directions.map((direction) => (
							<p
								key={direction}
								className="border-b border-gray-300 py-2 gap-1"
							>
								{direction}
							</p>
						))}
					</div>
					<div className="flex flex-col w-[100%] gap-[10px]">
						<Link href={`/recipes/${slug}/edit`}>
							<Button classOverrides="w-[100%]">Edit</Button>
						</Link>
						<Link href={`/recipes/${slug}/delete`}>
							<Button classOverrides="w-[100%]">Delete</Button>
						</Link>
					</div>
				</div>
			)}
		</section>
	);
}
