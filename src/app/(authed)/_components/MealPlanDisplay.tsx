import capitalize from "@/lib/capitalize";
import { DayOfWeek, MealPlan } from "@/lib/types";
import MealItems from "./MealItems";
import Button from "@/components/Button";
import { useState } from "react";
import AddMealModal from "./AddMealModal";
import { daysOfWeek } from "@/lib/constants";

export default function MealPlanDisplay({
  mealPlan,
  size = "",
}: {
  mealPlan: MealPlan;
  size?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className={`bg-gray-200 rounded-lg p-4 
		flex flex-col gap-[10px] ${size === "large" ? "gap-[20px]" : ""}`}
    >
      <p
        className={`text-gray-500 font-bold px-2 ${
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
      {isModalOpen ? (
        <AddMealModal
          forcedDayOfWeek={mealPlan.dayOfWeek}
          setOpen={setIsModalOpen}
        />
      ) : null}
      <div>
        <Button
          classOverrides={`${
            size === "large"
              ? "py-2 px-4 text-sm mt-[10px] "
              : "p-2 hover:bg-gray-100 hover:border-emerald-600 hover:text-emerald-600 border border-gray-400 py-1 text-xs"
          }`}
          variant={size === "large" ? "primary" : "secondary"}
          props={{ onClick: () => setIsModalOpen(true) }}
        >
          Add meal
        </Button>
      </div>
    </div>
  );
}
