type Variant = "primary" | "secondary" | "danger";

import { ButtonHTMLAttributes } from "react";

export default function Button({
	disabled,
	children,
	props,
	variant = "primary",
	classOverrides,
}: {
	disabled?: boolean;
	children: React.ReactNode;
	props?: ButtonHTMLAttributes<HTMLButtonElement>;
	variant?: Variant;
	classOverrides?: string;
}) {
	if (variant === "danger") {
		return (
			<button
				className={`text-sm hover:bg-red-500  font-bold text-white
					 rounded-md px-4 py-2 disabled:opacity-[0.5] bg-red-700 ${classOverrides}`}
				disabled={disabled}
				{...props}
			>
				{children}
			</button>
		);
	}
	if (variant === "secondary") {
		return (
			<button
				className={`text-sm hover:text-emerald-700 p-2 
						hover:bg-gray-200 disabled:opacity-[0.5] rounded-md ${classOverrides}`}
				disabled={disabled}
				{...props}
			>
				{children}
			</button>
		);
	}
	return (
		<button
			className={`bg-emerald-700 disabled:opacity-[0.5] text-white p-4 rounded-md text-lg font-black uppercase hover:bg-emerald-800 ${classOverrides}`}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
}
