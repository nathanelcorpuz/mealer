import Heading from "@/components/Heading";
import { daysOfWeek } from "@/lib/constants";
import { UserData } from "@/lib/types";
import MealPlanDisplay from "./MealPlanDisplay";
import getMealPlan from "../_utils/getMealPlan";

export default function WeeklyMealPlan({ userData }: { userData: UserData }) {
	return (
		<section className="flex flex-col gap-[20px]">
			<Heading variant="h3">Weekly meal plan</Heading>
			{daysOfWeek.map((day) => {
				const dailyMealPlan = getMealPlan(userData, day);
				return <MealPlanDisplay key={day} mealPlan={dailyMealPlan} />;
			})}
		</section>
	);
}
