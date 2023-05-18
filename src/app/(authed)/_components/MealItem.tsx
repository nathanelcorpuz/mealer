"use client";

import capitalize from "@/lib/capitalize";
import { useRouter } from "next/navigation";

export default function MealItem({
	schedule,
	recipe,
	size,
	id,
}: {
	schedule: string;
	recipe: string;
	size: string;
	id: string;
}) {
	const router = useRouter();
	return (
		<div
			className="border-b border-gray-300 p-2 hover:bg-gray-300 cursor-pointer"
			onClick={() => router.push(`/meals/${id}`)}
		>
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
