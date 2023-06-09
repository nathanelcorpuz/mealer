"use client";

import TodaysMealPlan from "./_components/TodaysMealPlan";
import useUserQuery from "@/hooks/queries/useUserQuery";
import getMealPlan from "./_utils/getMealPlan";
import { MealPlan } from "@/lib/types";
import { daysOfWeek } from "@/lib/constants";
import WeeklyMealPlan from "./_components/WeeklyMealPlan";
import TomorrowsMealPlan from "./_components/TomorrowMealPlan";

export default function Home() {
  const userQuery = useUserQuery();

  const dayToday = new Date().getDay();

  if (userQuery.isError) {
    return <section>Something went wrong...</section>;
  }

  if (userQuery.isSuccess) {
    const todaysMealPlan: MealPlan = getMealPlan(
      userQuery.data,
      daysOfWeek[new Date().getDay()]
    );
    const tomorrowsMealPlan: MealPlan = getMealPlan(
      userQuery.data,
      dayToday !== 6 ? daysOfWeek[new Date().getDay() + 1] : "sunday"
    );
    return (
      <section
        className="flex flex-col gap-[40px] 
			 rounded-lg max-w-[550px] mx-auto
			 p-2 sm:p-8 border border-gray-300"
      >
        <TodaysMealPlan mealPlan={todaysMealPlan} />
        <TomorrowsMealPlan mealPlan={tomorrowsMealPlan} />
        <WeeklyMealPlan userData={userQuery.data} />
      </section>
    );
  }

  return <section className="text-center">Loading your data...</section>;
}
