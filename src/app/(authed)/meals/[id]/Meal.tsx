"use client";

import MealView from "../_components/MealView";
import useMealQuery from "@/hooks/queries/useMealQuery";
import { Meal } from "@/lib/types";

export default function Meal({ id }: { id: string }) {
	const mealQuery = useMealQuery({ id });

	if (mealQuery.isLoading) {
		return (
			<section>
				<p className="text-center">Loading meal...</p>
			</section>
		);
	}
	return (
		<section className="flex flex-col gap-[20px] max-w-[550px] mx-auto">
			<MealView meal={mealQuery.data as Meal} />
		</section>
	);
}
