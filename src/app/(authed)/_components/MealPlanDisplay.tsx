import capitalize from "@/lib/capitalize";
import { MealPlan } from "@/lib/types";
import MealItems from "./MealItems";
import Button from "@/components/Button";

export default function MealPlanDisplay({ mealPlan }: { mealPlan: MealPlan }) {
	return (
		<div className="bg-gray-200 rounded-lg p-4 flex flex-col gap-[10px]">
			<p className="text-gray-500 font-bold text-lg">
				{capitalize(mealPlan.dayOfWeek)}
			</p>
			{mealPlan.meals.length === 0 ? (
				<p className="italic text-sm text-gray-500">No meals yet...</p>
			) : (
				<MealItems meals={mealPlan.meals} />
			)}
			<div>
				<Button classOverrides="py-2 px-4 text-sm mt-[10px]">Add meal</Button>
			</div>
		</div>
	);
}
