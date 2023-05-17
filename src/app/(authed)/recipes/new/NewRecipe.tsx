"use client";

import slugify from "slugify";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { newRecipeMutator as mutationFn } from "@/lib/mutators";
import useRecipeReducer from "../utils/useRecipeReducer";
import RecipeForm from "../_components/RecipeForm";
import ErrorText from "@/components/ErrorText";
import { FormEvent } from "react";

export default function NewRecipe() {
	const router = useRouter();

	const [state, dispatch] = useRecipeReducer();

	const mutation = useMutation({ mutationFn });

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const result = await mutation.mutateAsync({
			...state,
			slug: slugify(state.name),
		});
		if (result.isSuccess) router.back();
	};

	return (
		<div>
			<RecipeForm
				disabled={mutation.isLoading}
				heading="Add new recipe"
				state={state}
				dispatch={dispatch}
				onSubmit={onSubmit}
			/>
			{mutation.isError && (
				<ErrorText>{(mutation.error as Error).message}</ErrorText>
			)}
		</div>
	);
}
