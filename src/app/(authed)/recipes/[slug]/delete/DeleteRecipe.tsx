"use client";

import { useMutation } from "@tanstack/react-query";
import { Recipe } from "@/lib/types";
import Link from "next/link";
import { deleteRecipeMutator as mutationFn } from "@/lib/mutators";
import { useRouter } from "next/navigation";
import useRecipeQuery from "@/hooks/queries/useRecipeQuery";
import Heading from "@/components/Heading";
import YesNoConfirmation from "@/components/YesNoConfirmation";
import Button from "@/components/Button";

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
		<section className="max-w-[450px] mx-auto">
			{recipeQuery.isLoading && <p>Loading recipe....</p>}
			{recipeQuery.isSuccess && recipeData !== undefined && (
				<div className="flex flex-col items-start gap-[20px]">
					<Heading>Delete this recipe?</Heading>
					<p className="py-2">{recipeData.name}</p>
					<div className="flex gap-[50px] items-center">
						<Link href={`/recipes/${slug}`}>
							<Button variant="secondary">Back</Button>
						</Link>
						<form onSubmit={onSubmit}>
							<Button classOverrides="py-2 px-8">Yes</Button>
						</form>
					</div>
				</div>
			)}
		</section>
	);
}
