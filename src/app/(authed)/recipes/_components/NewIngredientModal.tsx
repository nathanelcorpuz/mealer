"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import ModalButtonsWrapper from "@/components/ModalButtonsWrapper";
import ModalWrapper from "@/components/ModalWrapper";
import { RecipeReducerAction } from "@/lib/types";
import { Dispatch, SetStateAction, useState } from "react";

export default function NewIngredientModal({
	setOpen,
	dispatch,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
	dispatch: Dispatch<RecipeReducerAction>;
}) {
	const [ingredient, setIngredientValue] = useState<string>("Chicken Thighs");
	const [quantity, setQuantity] = useState<string>("1 kg");

	const onSubmit = () => {
		dispatch({
			type: "added_ingredient",
			newIngredient: { ingredient, quantity },
		});
		setOpen(false);
	};
	return (
		<ModalWrapper>
			<Heading variant="h2">New Ingredient</Heading>
			<Input
				labelText="Ingredient"
				labelProps={{ htmlFor: "ingredient" }}
				inputProps={{
					type: "text",
					id: "ingredient",
					value: ingredient,
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

			<ModalButtonsWrapper>
				<Button
					variant="secondary"
					props={{ onClick: () => setOpen(false), type: "button" }}
				>
					Cancel
				</Button>
				<Button
					classOverrides="py-2 text-sm"
					props={{ type: "button", onClick: onSubmit }}
				>
					Submit
				</Button>
			</ModalButtonsWrapper>
		</ModalWrapper>
	);
}
