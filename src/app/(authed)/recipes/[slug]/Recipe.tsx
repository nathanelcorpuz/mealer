"use client";

import { Recipe } from "@/lib/types";
import Link from "next/link";
import useRecipeQuery from "@/hooks/queries/useRecipeQuery";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import ContentWrapper from "@/components/ContentWrapper";
import BackButton from "@/components/BackButton";

export default function Recipe({ slug }: { slug: string }) {
	const recipe = useRecipeQuery({ slug });

	let recipeData: Recipe | undefined;

	if (recipe.isSuccess) {
		recipeData = recipe.data;
	}

	return (
		<ContentWrapper>
			{recipe.isLoading && (
				<Heading variant="h5">Loading {slug.replace(/-/g, " ")}...</Heading>
			)}
			{recipe.isSuccess && recipeData !== undefined && (
				<div className="flex flex-col gap-[30px] items-start">
					<BackButton isHoverWhite />
					<Heading variant="h3">{recipeData.name}</Heading>
					<p>{recipeData.description}</p>
					<div className="flex flex-col gap-[10px] w-[100%]">
						<Heading variant="h5">Ingredients</Heading>
						{recipeData.ingredients.map(({ ingredient, quantity }) => (
							<div
								key={ingredient}
								className="flex justify-between border-b border-gray-300 py-2 gap-1"
							>
								<p className="text-sm">{ingredient}</p>
								<p className="text-sm">{quantity}</p>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-[10px] w-[100%]">
						<Heading variant="h5">Directions</Heading>
						{recipeData.directions.map((direction) => (
							<p
								key={direction}
								className="border-b border-gray-300 py-2 gap-1 text-sm"
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
		</ContentWrapper>
	);
}
