"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { NewRecipeAction } from "@/lib/types";
import { Dispatch, useState } from "react";
import NewDirectionModal from "./NewDirectionModal";
import EditDirectionModal from "./EditDirectionModal";

export default function NewRecipeDirections({
	directions,
	dispatch,
}: {
	directions: string[];
	dispatch: Dispatch<NewRecipeAction>;
}) {
	const [isNewModalOpen, setIsNewModalOpen] = useState<boolean>(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
	const [targetDirection, setTargetDirection] = useState<string>("");
	return (
		<div className="bg-white border border-gray-300 rounded-md">
			<Heading variant="h4" classOverrides="px-4 py-3">
				Directions
			</Heading>
			<ul>
				{directions.map((direction, index) => (
					<button
						key={direction + index}
						type="button"
						className="w-[100%] flex justify-between px-4 py-3 
							hover:text-emerald-700
							hover:bg-emerald-200
							cursor-pointer"
						onClick={() => {
							setTargetDirection(direction);
							setIsEditModalOpen(true);
						}}
					>
						<p>{direction}</p>
					</button>
				))}
			</ul>
			<Button
				classOverrides="w-[100%] py-2 rounded-t-none"
				props={{ type: "button", onClick: () => setIsNewModalOpen(true) }}
			>
				Add
			</Button>
			{isNewModalOpen && (
				<NewDirectionModal dispatch={dispatch} setOpen={setIsNewModalOpen} />
			)}
			{isEditModalOpen && (
				<EditDirectionModal
					targetDirection={targetDirection}
					dispatch={dispatch}
					setOpen={setIsEditModalOpen}
				/>
			)}
		</div>
	);
}
