"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import NewIngredientModal from "./NewIngredientModal";
import { Dispatch, useState } from "react";
import EditIngredientModal from "./EditIngredientModal";
import { FormIngredient, RecipeReducerAction } from "@/lib/types";

export default function FormRecipeIngredients({
	ingredients,
	dispatch,
}: {
	ingredients: FormIngredient[];
	dispatch: Dispatch<RecipeReducerAction>;
}) {
	const [isNewModalOpen, setIsNewModalOpen] = useState<boolean>(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
	const [targetIngredient, setTargetIngredient] = useState<FormIngredient>({
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
							setTargetIngredient({ ingredient, quantity });
							setIsEditModalOpen(true);
						}}
					>
						<p>{ingredient}</p>
						<p>{quantity}</p>
					</button>
				))}
			</ul>
			<Button
				classOverrides="w-[100%] py-2 rounded-t-none"
				props={{ type: "button", onClick: () => setIsNewModalOpen(true) }}
			>
				Add
			</Button>
			{isNewModalOpen && (
				<NewIngredientModal dispatch={dispatch} setOpen={setIsNewModalOpen} />
			)}
			{isEditModalOpen && (
				<EditIngredientModal
					targetIngredient={targetIngredient}
					dispatch={dispatch}
					setOpen={setIsEditModalOpen}
				/>
			)}
		</div>
	);
}
