"use client";

import Heading from "@/components/Heading";
import { MealPlan } from "@/lib/types";
import MealPlanDisplay from "./MealPlanDisplay";

export default function MealPlan({ mealPlan }: { mealPlan: MealPlan }) {
	return (
		<section className="flex flex-col gap-[20px]">
			<Heading variant="h3">Today's meals</Heading>
			<MealPlanDisplay mealPlan={mealPlan} />
		</section>
	);
}
