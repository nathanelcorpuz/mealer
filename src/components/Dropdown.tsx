"use client";

import { DropdownSelection } from "@/lib/types";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const defaultOptions = [
	{
		value: "Sample 1",
		label: "sample-1",
	},
	{
		value: "Sample 2",
		label: "sample-2",
	},
];

export default function Dropdown({
	disabled,
	selections = defaultOptions,
	label = "Dropdown label",
	controls,
}: {
	disabled: boolean;
	label: string;
	selections: DropdownSelection[];
	controls: {
		isOpen: boolean;
		setIsOpen: Dispatch<SetStateAction<boolean>>;
		selection: DropdownSelection;
		setSelection: Dispatch<SetStateAction<DropdownSelection>>;
	};
}) {
	const dropdownRef = useRef<HTMLDivElement>(null);
	const { isOpen, setIsOpen, selection, setSelection } = controls;
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div ref={dropdownRef} className={`${disabled ? "opacity-[0.5]" : ""}`}>
			<p className="text-sm text-gray-500 pb-1">{label}</p>
			<div
				className={`relative bg-white rounded-md p-2 border 
				border-gray-300 cursor-pointer hover:bg-gray-200 text-sm ${
					selection.label === "" ? "text-gray-400" : ""
				}`}
				onClick={() => setIsOpen(true)}
			>
				<p>{selection.label === "" ? "Select an option " : selection.label}</p>
				{isOpen ? (
					<div
						className="rounded-md border border-gray-300 text-black
        absolute left-[-1px] top-[115%] right-[-1px]
        z-[100] bg-white"
					>
						{selections.map((option) => (
							<p
								key={option.value}
								className="p-2 cursor-pointer hover:bg-gray-200 text-sm"
								onClick={(e) => {
									e.stopPropagation();
									if (disabled) return;
									setSelection(option);
									setIsOpen(false);
								}}
							>
								{option.label}
							</p>
						))}
					</div>
				) : null}
			</div>
		</div>
	);
}
