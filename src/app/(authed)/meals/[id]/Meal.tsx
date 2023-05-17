"use client";

import Button from "@/components/Button";
import Link from "next/link";
import MealView from "../_components/MealView";
import useMealQuery from "@/hooks/queries/useMealQuery";
import { Meal } from "@/lib/types";

export default function Meal({ id }: { id: string }) {
	const mealQuery = useMealQuery({ id });

	if (mealQuery.isLoading) {
		return (
			<section>
				<p>Loading meal...</p>
			</section>
		);
	}
	return (
		<section className="flex flex-col gap-[20px] max-w-[550px] mx-auto">
			<MealView meal={mealQuery.data as Meal} />
			<div className="flex flex-col gap-[10px] pt-[10px]">
				<Link className="block w-[100%]" href={`/meals/${id}/edit`}>
					<Button classOverrides="w-[100%]">Edit</Button>
				</Link>
				<Link className="block w-[100%]" href={`/meals/${id}/delete`}>
					<Button classOverrides="w-[100%]">Delete</Button>
				</Link>
			</div>
		</section>
	);
}
