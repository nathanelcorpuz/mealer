import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { NewIngredient, NewRecipeAction } from "@/lib/types";
import { Dispatch, SetStateAction, useState } from "react";

export default function EditIngredientModal({
	ingredient,
	dispatch,
	setOpen,
}: {
	ingredient: NewIngredient;
	dispatch: Dispatch<NewRecipeAction>;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) {
	const [ingredientValue, setIngredientValue] = useState<string>(
		ingredient.ingredient
	);
	const [quantity, setQuantity] = useState<string>(ingredient.quantity);

	const onSubmitEdit = () => {
		dispatch({
			type: "edited_ingredient",
			ingredientToEdit: ingredient,
			newIngredient: { ingredient: ingredientValue, quantity },
		});
		setOpen(false);
	};
	return (
		<div
			className="fixed top-0 right-0 bottom-0 left-0 
		[background:rgb(0,0,0,0.5)] flex items-center justify-center p-4"
		>
			<div
				className="w-[400px] bg-white 
      text-gray-950 z-[99] rounded-md p-4 flex flex-col gap-[20px]"
			>
				<Heading variant="h2">Edit Ingredient</Heading>
				<Input
					labelText="Ingredient"
					labelProps={{ htmlFor: "ingredient" }}
					inputProps={{
						type: "text",
						id: "ingredient",
						value: ingredientValue,
						onChange: (e) => setIngredientValue(e.target.value),
					}}
				/>
				<Input
					labelText="Quantity"
					labelProps={{ htmlFor: "quantity" }}
					inputProps={{
						type: "text",
						id: "quantity",
						value: quantity,
						onChange: (e) => setQuantity(e.target.value),
					}}
				/>
				<div className="flex justify-between items-center">
					<button
						className="text-sm hover:text-emerald-700 p-2 
						hover:bg-gray-200 rounded-md"
						onClick={() => setOpen(false)}
						type="button"
					>
						Cancel
					</button>
					<Button
						classOverrides="py-2 text-sm"
						props={{ onClick: onSubmitEdit, type: "button" }}
					>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
}
