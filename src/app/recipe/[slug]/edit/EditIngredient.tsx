"use client";

import { Ingredient } from "@/lib/types";
import { Dispatch, SetStateAction, useState } from "react";

export default function EditIngredient({
	index,
	newIngredients,
	setNewIngredients,
	isLoading,
}: {
	index: number;
	newIngredients: Ingredient[];
	setNewIngredients: Dispatch<SetStateAction<Ingredient[]>>;
	isLoading: boolean;
}) {
	const { ingredient, quantity } = newIngredients[index];
	const ingredientId = `${index}${quantity}`;
	const quantityId = `${index}${quantity}`;
	return (
		<div className="flex flex-col items-start gap-[10px] border-2 border-gray-950 p-4">
			<div>
				<label htmlFor={ingredientId}>Ingredient</label>
				<input
					className="border-2 border-gray-500 px-4 py-2"
					id={ingredientId}
					type="text"
					value={ingredient}
					onChange={(e) =>
						setNewIngredients((prev) => {
							const prevCopy: Ingredient[] = JSON.parse(JSON.stringify(prev));
							prevCopy[index].ingredient = e.target.value;
							return prevCopy;
						})
					}
					disabled={isLoading}
				/>
			</div>
			<div>
				<label htmlFor={quantityId}>Quantity</label>
				<input
					className="border-2 border-gray-500 px-4 py-2"
					id={quantityId}
					type="text"
					value={quantity}
					onChange={(e) =>
						setNewIngredients((prev) => {
							const prevCopy: Ingredient[] = JSON.parse(JSON.stringify(prev));
							prevCopy[index].quantity = e.target.value;
							return prevCopy;
						})
					}
					disabled={isLoading}
				/>
			</div>
		</div>
	);
}
