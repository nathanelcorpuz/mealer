"use client";

import { UserData } from "@/lib/types";
import Link from "next/link";
import useUser from "@/hooks/queries/useUser";

export default function Recipe() {
	const user = useUser();

	let userData: UserData | undefined;

	if (user.isSuccess) {
		userData = user.data;
	}

	return (
		<main className="flex flex-col">
			<Link
				href="/recipe/new"
				className="px-[20px] py-[8px] bg-gray-950 text-white"
			>
				Create New Recipe
			</Link>
			<div className=" flex flex-col gap-[20px]">
				<p className=" text-5xl">Recipes</p>
				{user.isLoading && <p>Loading your recipes...</p>}
				{user.isSuccess &&
					userData !== undefined &&
					userData.recipes.map((recipe) => (
						<Link key={recipe.name} href={`/recipe/${recipe.slug}`}>
							{recipe.name}
						</Link>
					))}
			</div>
		</main>
	);
}
