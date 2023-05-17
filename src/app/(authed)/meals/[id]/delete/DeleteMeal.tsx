"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import YesNoConfirmation from "@/components/YesNoConfirmation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MealView from "../../_components/MealView";

export default function Meal({ id }: { id: string }) {
	const router = useRouter();
	return (
		<section className="flex flex-col gap-[20px] max-w-[550px]">
			<MealView />
			<div className="flex flex-col gap-[10px] pt-[10px]">
				<Link className="block w-[100%]" href={`/meals/${id}/edit`}>
					<Button classOverrides="w-[100%]">Edit</Button>
				</Link>
				<YesNoConfirmation
					heading="Delete this meal?"
					onNo={() => router.push("/meals/" + id)}
					onYes={() => {
						// handle delete mutation
						router.push("/meals");
					}}
				/>
			</div>
		</section>
	);
}
