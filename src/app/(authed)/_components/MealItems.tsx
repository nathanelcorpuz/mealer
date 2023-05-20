import { Meal } from "@/lib/types";
import MealItem from "./MealItem";

export default function MealItems({
  meals,
  size,
}: {
  meals: Meal[];
  size: string;
}) {
  return (
    <div>
      {meals.map((meal) => (
        <MealItem
          size={size}
          key={meal._id}
          id={meal._id}
          schedule={meal.timeOfDay}
          recipe={meal.recipeId.name}
        />
      ))}
    </div>
  );
}
