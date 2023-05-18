"use client";

import TodaysMealPlan from "./_components/TodaysMealPlan";
import useUserQuery from "@/hooks/queries/useUserQuery";
import getMealPlan from "./_utils/getMealPlan";
import { MealPlan } from "@/lib/types";
import { daysOfWeek } from "@/lib/constants";
import WeeklyMealPlan from "./_components/WeeklyMealPlan";

export default function Home() {
	const userQuery = useUserQuery();

	if (userQuery.isError) {
		return <section>Something went wrong...</section>;
	}

	if (userQuery.isSuccess) {
		const mealPlan: MealPlan = getMealPlan(
			userQuery.data,
			daysOfWeek[new Date().getDay()]
		);
		return (
			<section
				className="flex flex-col gap-[40px] 
			 rounded-lg max-w-[550px] mx-auto
			 p-8 border border-gray-300"
			>
				<TodaysMealPlan mealPlan={mealPlan} />
				<WeeklyMealPlan userData={userQuery.data} />
			</section>
		);
	}

	return <section className="text-center">Loading your data...</section>;
}
