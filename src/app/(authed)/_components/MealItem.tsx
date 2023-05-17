import capitalize from "@/lib/capitalize";

export default function MealItem({
	schedule,
	recipe,
}: {
	schedule: string;
	recipe: string;
}) {
	return (
		<div className="border-b border-gray-300 py-2">
			<p className="text-gray-500 text-sm">{capitalize(schedule)}</p>
			<p className="font-bold text-emerald-700 text-xl">{capitalize(recipe)}</p>
		</div>
	);
}
