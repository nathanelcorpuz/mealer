"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { IngredientToEdit, NewIngredient, NewRecipeAction } from "@/lib/types";
import NewIngredientModal from "./NewIngredientModal";
import { Dispatch, useState } from "react";
import EditIngredientModal from "./EditIngredientModal";

export default function NewRecipeIngredients({
	ingredients,
	dispatch,
}: {
	ingredients: NewIngredient[];
	dispatch: Dispatch<NewRecipeAction>;
}) {
	const [isNewModalOpen, setIsNewModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [ingredientToEdit, setIngredientToEdit] = useState<IngredientToEdit>({
		quantity: "",
		ingredient: "",
	});
	return (
		<div className="bg-white border border-gray-300 rounded-md">
			<Heading variant="h4" classOverrides="px-4 py-3">
				Ingredients
			</Heading>
			<ul>
				{ingredients.map(({ ingredient, quantity }) => (
					<button
						key={ingredient + quantity}
						type="button"
						className="w-[100%] flex justify-between px-4 py-3 
							hover:text-emerald-700
							hover:bg-emerald-200
							cursor-pointer"
						onClick={() => {
							setIngredientToEdit({ ingredient, quantity });
							setIsEditModalOpen(true);
						}}
					>
						<p>{ingredient}</p>
						<p>{quantity}</p>
					</button>
				))}
			</ul>
			<Button
				classOverrides="w-[100%] py-2"
				props={{ type: "button", onClick: () => setIsNewModalOpen(true) }}
			>
				Add
			</Button>
			{isNewModalOpen && (
				<NewIngredientModal dispatch={dispatch} setOpen={setIsNewModalOpen} />
			)}
			{isEditModalOpen && (
				<EditIngredientModal
					ingredient={ingredientToEdit}
					dispatch={dispatch}
					setOpen={setIsEditModalOpen}
				/>
			)}
		</div>
	);
}
