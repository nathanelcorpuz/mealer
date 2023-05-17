"use client";

import slugify from "slugify";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { newRecipeMutator as mutationFn } from "@/lib/mutators";
import useRecipeReducer from "../utils/useRecipeReducer";
import RecipeForm from "../_components/RecipeForm";

export default function NewRecipeForm() {
	const router = useRouter();

	const [state, dispatch] = useRecipeReducer();

	const mutation = useMutation({ mutationFn });

	if (mutation.isSuccess) {
		router.push("/recipe");
	}

	const onSubmit = (e: any) => {
		e.preventDefault();
		mutation.mutate({ ...state, slug: slugify(state.name) });
	};

	return (
		<RecipeForm
			heading="Add new recipe"
			state={state}
			dispatch={dispatch}
			onSubmit={onSubmit}
		/>
	);
}
