import Button from "@/components/Button";
import Link from "next/link";
import MealView from "../_components/MealView";

export default function Meal({ id }: { id: string }) {
	return (
		<section className="flex flex-col gap-[20px] max-w-[550px]">
			<MealView />
			<div className="flex flex-col gap-[10px] pt-[10px]">
				<Link className="block w-[100%]" href={`/meals/${id}/edit`}>
					<Button classOverrides="w-[100%]">Edit</Button>
				</Link>
				<Link className="block w-[100%]" href={`/meals/${id}/delete`}>
					<Button classOverrides="w-[100%]">Delete</Button>
				</Link>
			</div>
		</section>
	);
}
