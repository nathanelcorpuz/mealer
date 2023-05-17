import capitalize from "@/lib/capitalize";
import { MealPlan } from "@/lib/types";
import MealItems from "./MealItems";
import Button from "@/components/Button";

export default function MealPlanDisplay({
	mealPlan,
	size = "",
}: {
	mealPlan: MealPlan;
	size?: string;
}) {
	return (
		<div
			className={`bg-gray-200 rounded-lg p-4 
		flex flex-col gap-[10px] ${size === "large" ? "gap-[20px]" : ""}`}
		>
			<p
				className={`text-gray-500 font-bold ${
					size === "large" ? "text-2xl" : "text-lg font-normal"
				}`}
			>
				{capitalize(mealPlan.dayOfWeek)}
			</p>
			{mealPlan.meals.length === 0 ? (
				<p className="italic text-sm text-gray-500">No meals yet...</p>
			) : (
				<MealItems size={size} meals={mealPlan.meals} />
			)}
			<div>
				<Button
					classOverrides={`${
						size === "large"
							? "py-2 px-4 text-sm mt-[10px] "
							: "p-2 hover:bg-gray-100 border border-gray-400 py-1 text-xs"
					}`}
					variant={size === "large" ? "primary" : "secondary"}
				>
					Add meal
				</Button>
			</div>
		</div>
	);
}
