"use client";

import Heading from "@/components/Heading";
import { MealPlan } from "@/lib/types";
import MealPlanDisplay from "./MealPlanDisplay";

export default function TomorrowsMealPlan({ mealPlan }: { mealPlan: MealPlan }) {
	return (
		<section className="flex flex-col gap-[20px]">
			<Heading variant="h3">Tomorrow&apos;s meals</Heading>
			<MealPlanDisplay size="large" mealPlan={mealPlan} />
		</section>
	);
}
