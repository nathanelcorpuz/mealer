import { Meal } from "@/lib/types";
import MealItem from "./MealItem";

export default function MealItems({ meals }: { meals: Meal[] }) {
	return (
		<div>
			{meals.map((meal) => (
				<MealItem
					key={meal._id}
					schedule={meal.timeOfDay}
					recipe={meal.recipeId.name}
				/>
			))}
		</div>
	);
}
