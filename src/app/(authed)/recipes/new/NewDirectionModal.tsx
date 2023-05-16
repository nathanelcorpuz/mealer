"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import ModalWrapper from "@/components/ModalWrapper";
import { NewRecipeAction } from "@/lib/types";
import { Dispatch, SetStateAction, useState } from "react";

export default function NewDirectionModal({
	setOpen,
	dispatch,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
	dispatch: Dispatch<NewRecipeAction>;
}) {
	const [newDirection, setNewDirection] = useState<string>("Sample");

	const onSubmitNewDirection = () => {
		dispatch({
			type: "added_direction",
			newDirection,
		});
		setOpen(false);
	};

	return (
		<ModalWrapper>
			<Heading variant="h2">New Direction</Heading>
			<Input
				labelText="Direction"
				labelProps={{ htmlFor: "direction" }}
				inputProps={{
					type: "text",
					id: "direction",
					value: newDirection,
					onChange: (e) => setNewDirection(e.target.value),
				}}
			/>
			<div className="flex justify-between items-center">
				<button
					className="text-sm hover:text-emerald-700 p-2 
						hover:bg-gray-200 rounded-md"
					onClick={() => setOpen(false)}
					type="button"
				>
					Cancel
				</button>
				<Button
					classOverrides="py-2 text-sm"
					props={{ type: "button", onClick: onSubmitNewDirection }}
				>
					Submit
				</Button>
			</div>
		</ModalWrapper>
	);
}
