"use client";

import slugify from "slugify";
import { Ingredient, Recipe } from "@/lib/types";
import EditDirection from "./EditDirection";
import EditIngredient from "./EditIngredient";
import { useState } from "react";
import useMutation from "@/hooks/useMutation";
import { editRecipeMutator as mutator } from "@/lib/mutators";
import { useRouter } from "next/navigation";

export default function EditRecipeForm({ recipe }: { recipe: Recipe }) {
	const router = useRouter();
	const [newName, setNewName] = useState<string>(recipe.name);
	const [newDescription, setNewDescription] = useState<string>(
		recipe.description
	);
	const [newDirections, setNewDirections] = useState<string[]>(
		recipe.directions
	);
	const [newIngredients, setNewIngredients] = useState<Ingredient[]>(
		recipe.ingredients
	);

	const mutation = useMutation({ mutator });

	if (mutation.isSuccess) {
		router.replace(`/recipe/${slugify(newName)}`);
	}

	const onSubmit = (e: any) => {
		e.preventDefault();
		const payload: Recipe = {
			_id: recipe._id,
			name: newName,
			slug: slugify(newName),
			description: newDescription,
			ingredients: newIngredients,
			directions: newDirections,
		};
		mutation.mutate(payload);
	};
	return (
		<form className="flex flex-col items-start gap-[20px]" onSubmit={onSubmit}>
			<div>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					type="text"
					value={newName}
					onChange={(e) => setNewName(e.target.value)}
					className="py-2 px-4 border-2 border-gray-500"
					disabled={mutation.isLoading}
				/>
			</div>
			<div>
				<label htmlFor="description">Description</label>
				<input
					id="description"
					type="text"
					value={newDescription}
					onChange={(e) => setNewDescription(e.target.value)}
					className="py-2 px-4 border-2 border-gray-500"
					disabled={mutation.isLoading}
				/>
			</div>

			<div className="p-4 border-2 border-gray-950 flex flex-col gap-[15px] items-start">
				<p>Ingredients</p>
				{newIngredients.map((ingredient, index) => (
					<EditIngredient
						key={ingredient._id}
						index={index}
						newIngredients={newIngredients}
						setNewIngredients={setNewIngredients}
						isLoading={mutation.isLoading}
					/>
				))}
				<button
					type="button"
					className="px-2 py-1 bg-gray-950 text-white"
					onClick={() =>
						setNewIngredients((prev) => [
							...JSON.parse(JSON.stringify(prev)),
							{
								ingredient: "Enter new ingredient",
								quantity: "Enter new quantity",
							},
						])
					}
				>
					Add
				</button>
			</div>

			<div className="p-4 border-2 border-gray-950 flex flex-col gap-[15px] items-start">
				<p>Directions</p>
				{newDirections.map((_, index) => (
					<EditDirection // relies on the index to make updates
						key={index}
						index={index}
						newDirections={newDirections}
						setNewDirections={setNewDirections}
						isLoading={mutation.isLoading}
					/>
				))}
				<button
					type="button"
					className="px-3 py-1 bg-gray-950 text-white"
					onClick={() =>
						setNewDirections((prev) => [...prev, "Enter new direction"])
					}
				>
					New direction
				</button>
			</div>
			<button>Submit</button>
		</form>
	);
}
