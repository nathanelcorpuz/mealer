"use client";

import { useMutation } from "@tanstack/react-query";
import { Recipe } from "@/lib/types";
import Link from "next/link";
import { deleteRecipeMutator as mutationFn } from "@/lib/mutators";
import { useRouter } from "next/navigation";
import useRecipeQuery from "@/hooks/queries/useRecipeQuery";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { FormEvent } from "react";

export default function DeleteRecipe({ slug }: { slug: string }) {
	const recipeQuery = useRecipeQuery({ slug });
	const mutation = useMutation({ mutationFn });
	const router = useRouter();

	let recipeData: Recipe | undefined;

	if (recipeQuery.isSuccess) recipeData = recipeQuery.data;

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (recipeData?._id) {
			const result = await mutation.mutateAsync({ _id: recipeData._id });
			if (result.isSuccess) router.push("/recipes");
		}
	};

	return (
		<Form props={{ onSubmit }}>
			{recipeQuery.isLoading && (
				<p className="text-center">Loading recipe....</p>
			)}
			{recipeQuery.isSuccess && recipeData !== undefined && (
				<div className="flex flex-col items-start gap-[20px]">
					<Heading variant="h4" classOverrides="text-red-600">
						Delete this recipe?
					</Heading>
					<p className="font-bold text-emerald-700 p-4 border border-gray-300 bg-white rounded-lg w-[100%]">
						{recipeData.name}
					</p>
					<div className="flex gap-[50px] items-center justify-between w-[100%]">
						<Button
							variant="secondary"
							props={{
								type: "button",
								disabled: recipeQuery.isLoading,
								onClick: () => router.back(),
							}}
							classOverrides="hover:bg-white"
						>
							Back
						</Button>
						<Button
							classOverrides="py-2 px-8 bg-red-700 hover:bg-red-600"
							props={{ disabled: recipeQuery.isLoading }}
						>
							Yes
						</Button>
					</div>
				</div>
			)}
		</Form>
	);
}
