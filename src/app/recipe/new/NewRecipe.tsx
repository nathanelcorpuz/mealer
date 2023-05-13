"use client";

import useMutation from "@/hooks/useMutation";
import { useState } from "react";
import { newRecipeMutator as mutator } from "@/lib/mutators";
import slugify from "slugify";

export default function NewRecipePage() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [directions, setDirections] = useState([
		"sample direction 1",
		"sample direction 2",
	]);
	const [ingredients, setIngredients] = useState([
		{
			ingredient: "Sample ingredient 1",
			quantity: "5 pcs",
		},
		{
			ingredient: "Sample ingredient 2",
			quantity: "2 lbs",
		},
	]);
	const mutation = useMutation({ mutator });

	const onSubmit = (e: any) => {
		e.preventDefault();
		mutation.mutate({
			name,
			description,
			directions,
			ingredients,
			slug: slugify(name),
		});
	};

	return (
		<main>
			<form className="max-w-[600px]" onSubmit={onSubmit}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						id="name"
						type="text"
						className="w-[100%] border-2 border-gray-500"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<textarea
						rows={5}
						className="w-[100%] border-2 border-gray-500"
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<button>Create New Recipe</button>
			</form>
			{mutation.isError && <p>{mutation.error}</p>}
		</main>
	);
}
