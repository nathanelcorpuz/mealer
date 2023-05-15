"use client";

import { Dispatch, SetStateAction } from "react";

export default function EditDirection({
	index,
	newDirections,
	setNewDirections,
	isLoading,
}: {
	index: number;
	newDirections: string[];
	setNewDirections: Dispatch<SetStateAction<string[]>>;
	isLoading: boolean;
}) {
	const order = index + 1;
	const id = `${order}-${newDirections[index]}`;
	return (
		<div className="flex flex-col items-start">
			<label htmlFor={id}>#{index + 1}</label>
			<input
				className="border-2 border-gray-500 px-4 py-2"
				id={id}
				type="text"
				value={newDirections[index]}
				onChange={(e) =>
					setNewDirections((prev) => {
						const prevCopy = [...prev];
						prevCopy.splice(index, 1, e.target.value);
						return prevCopy;
					})
				}
				disabled={isLoading}
			/>
			<button
				type="button"
				className="px-2 py-1 bg-gray-950 text-white"
				onClick={() =>
					setNewDirections((prev) => {
						const prevCopy = [...prev];
						prevCopy.splice(index, 1);
						return prevCopy;
					})
				}
			>
				Delete
			</button>
		</div>
	);
}
