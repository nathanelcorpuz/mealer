import Button from "@/components/Button";
import Heading from "@/components/Heading";
import capitalize from "@/lib/capitalize";
import { Meal } from "@/lib/types";
import { useRouter } from "next/navigation";
import MealViewItemContainer from "./MealViewItemContainer";

export default function MealView({ meal }: { meal: Meal }) {
	const router = useRouter();
	const ingredients = meal.recipeId.ingredients;
	const directions = meal.recipeId.directions;
	return (
		<div className="flex flex-col gap-[20px] bg-gray-200 p-8 rounded-lg">
			<Button
				variant="secondary"
				classOverrides="self-start"
				props={{ onClick: () => router.back() }}
			>
				Back
			</Button>
			<Heading variant="h3">{meal.dayOfWeek} meal</Heading>
			<MealViewItemContainer>
				<p className="text-gray-500 text-sm">Schedule</p>
				<p className="font-bold text-emerald-700 text-lg">
					{capitalize(meal.timeOfDay)}
				</p>
			</MealViewItemContainer>
			<MealViewItemContainer>
				<p className="text-gray-500 text-sm">Notes</p>
				<p className="font-bold text-emerald-700 text-lg">{meal.notes}</p>
			</MealViewItemContainer>
			<MealViewItemContainer classOverrides="flex flex-col gap-[10px]">
				<div>
					<p className="text-gray-500 text-sm">Meal to cook</p>
					<p className="font-bold text-emerald-700 text-lg">
						{capitalize(meal.recipeId.name)}
					</p>
					<p className="text-emerald-700 text-sm italic">
						{capitalize(meal.recipeId.description)}
					</p>
				</div>
				<div className="border-t border-gray-300 pt-4">
					<p className="text-sm text-gray-500">Ingredients</p>
					<ul>
						{ingredients.map((ingredient) => (
							<li key={ingredient.ingredient + ingredient.quantity}>
								<p className="text-sm pt-1">{`${ingredient.quantity} - ${ingredient.ingredient}`}</p>
							</li>
						))}
					</ul>
				</div>
				<div className="border-t border-gray-300 pt-4">
					<p className="text-sm text-gray-500">Directions</p>
					<ul>
						{directions.map((direction, index) => (
							<p key={direction} className="text-sm pt-1">{`${
								index + 1
							}. ${direction}`}</p>
						))}
					</ul>
				</div>
			</MealViewItemContainer>
		</div>
	);
}
