import useRecipeReducer from "../../utils/useRecipeReducer";
import { RecipeReducerState } from "@/lib/types";
import RecipeForm from "../../_components/RecipeForm";
import { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { editRecipeMutator as mutationFn } from "@/lib/mutators";
import slugify from "slugify";
import { useRouter } from "next/navigation";

export default function EditRecipeForm({
	_id,
	recipe,
}: {
	_id: string;
	recipe: RecipeReducerState;
}) {
	const router = useRouter();
	const [state, dispatch] = useRecipeReducer(recipe);
	const mutation = useMutation({ mutationFn });

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const result = await mutation.mutateAsync({
			...state,
			_id,
			slug: slugify(state.name),
		});
		if (result.isSuccess) router.push("/recipes");
	};
	return (
		<RecipeForm
			disabled={mutation.isLoading}
			state={state}
			dispatch={dispatch}
			heading={recipe.name}
			onSubmit={onSubmit}
		/>
	);
}
