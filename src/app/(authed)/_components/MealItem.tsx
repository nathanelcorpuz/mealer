import capitalize from "@/lib/capitalize";

export default function MealItem({
	schedule,
	recipe,
	size,
}: {
	schedule: string;
	recipe: string;
	size: string;
}) {
	return (
		<div className="border-b border-gray-300 py-2">
			<p className="text-gray-500 font-light text-sm">{capitalize(schedule)}</p>
			<p
				className={`font-bold  
				${size === "large" ? "text-xl text-emerald-700" : "text-sm font-normal "}`}
			>
				{capitalize(recipe)}
			</p>
		</div>
	);
}
