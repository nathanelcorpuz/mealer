"use client";

import slugify from "slugify";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { newRecipeMutator as mutationFn } from "@/lib/mutators";

export default function NewRecipePage() {
	const router = useRouter();

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

	const mutation = useMutation({ mutationFn });

	if (mutation.isSuccess) {
		router.push("/recipe");
	}

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
			{mutation.isError && <p>{(mutation.error as Error).message}</p>}
		</main>
	);
}
