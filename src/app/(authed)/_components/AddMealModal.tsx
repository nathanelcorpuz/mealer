import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import MealForm from "../meals/_components/MealForm";
import useUserQuery from "@/hooks/queries/useUserQuery";
import { DayOfWeek } from "@/lib/types";
import { newMealMutator } from "@/lib/mutators";

export default function AddMealModal({
	setOpen,
	forcedDayOfWeek,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
	forcedDayOfWeek: DayOfWeek;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	const userQuery = useUserQuery();
	return (
		<div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center [background:rgb(0,0,0,0.5)] z-[100] p-2">
			<div ref={ref} className="w-[550px]">
				<MealForm
					setIsModalOpen={setOpen}
					mutationFn={newMealMutator}
					user={userQuery.data}
					forcedDayOfWeek={forcedDayOfWeek}
				/>
			</div>
		</div>
	);
}
