import Heading from "@/components/Heading";

const ingredients = [
	{
		quantity: "1 kg",
		ingredient: "Chicken Thighs",
	},
	{
		quantity: "5 pcs",
		ingredient: "Onions",
	},
];

const directions = [
	"Marinate chicken",
	"Cut onions and potatoes",
	"Cook chicken and store",
	"Cook onions and potatoes in chicken oil",
];

export default function MealView() {
	return (
		<div className="flex flex-col gap-[20px]">
			<Heading>Monday meal</Heading>
			<div className="bg-gray-200 rounded-lg p-4">
				<p className="text-gray-500 text-sm">Schedule</p>
				<p className="font-bold text-emerald-700 text-lg">Breakfast</p>
			</div>
			<div className="bg-gray-200 rounded-lg p-4">
				<p className="text-gray-500 text-sm">Notes</p>
				<p className="font-bold text-emerald-700 text-lg">
					Prepare before work day starts
				</p>
			</div>
			<div className="bg-gray-200 rounded-lg p-4 flex flex-col gap-[10px]">
				<div>
					<p className="text-gray-500 text-sm">Meal to cook</p>
					<p className="font-bold text-emerald-700 text-lg">Adobong manok</p>
					<p className="text-emerald-700 text-sm italic">
						Chicken cooked in soy sauce
					</p>
				</div>

				<div className="border-t border-gray-300 pt-4">
					<p className="text-sm text-gray-500">Ingredients</p>
					<ul>
						{ingredients.map((ingredient) => (
							<li key={ingredient.ingredient + ingredient.quantity}>
								{`${ingredient.quantity} - ${ingredient.ingredient}`}
							</li>
						))}
					</ul>
				</div>
				<div className="border-t border-gray-300 pt-4">
					<p className="text-sm text-gray-500">Directions</p>
					<ul>
						{directions.map((direction, index) => (
							<p key={direction}>{`${index + 1}. ${direction}`}</p>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
