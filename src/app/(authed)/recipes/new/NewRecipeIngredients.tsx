"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Ingredient } from "@/lib/types";
import NewIngredientModal from "./NewIngredientModal";
import { useState } from "react";
import EditIngredientModal from "./EditIngredientModal";

interface NewIngredient extends Omit<Ingredient, "_id"> {}

export default function NewRecipeIngredients({
	ingredients,
}: {
	ingredients: NewIngredient[];
}) {
	const [isNewModalOpen, setIsNewModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [ingredientBeingEdited, setIngredientBeingEdited] =
		useState<NewIngredient>({ quantity: "", ingredient: "" });
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
							setIngredientBeingEdited({ ingredient, quantity });
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
			{isNewModalOpen && <NewIngredientModal setOpen={setIsNewModalOpen} />}
			{isEditModalOpen && (
				<EditIngredientModal
					ingredient={ingredientBeingEdited}
					setOpen={setIsEditModalOpen}
				/>
			)}
		</div>
	);
}
