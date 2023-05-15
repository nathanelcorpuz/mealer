type Variant = "primary" | "secondary" | "danger";

import { ButtonHTMLAttributes } from "react";

export default function Button({
	children,
	props,
	variant = "primary",
	classOverrides,
}: {
	children: React.ReactNode;
	props?: ButtonHTMLAttributes<HTMLButtonElement>;
	variant?: Variant;
	classOverrides?: string;
}) {
	if (variant === "danger") {
		return (
			<button
				className={`text-sm hover:bg-red-500  font-bold text-white
					 rounded-md px-4 py-2 bg-red-700 ${classOverrides}`}
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
						hover:bg-gray-200 rounded-md ${classOverrides}`}
				{...props}
			>
				{children}
			</button>
		);
	}
	return (
		<button
			className={`bg-emerald-700 text-white p-4 rounded-md text-lg font-black uppercase hover:bg-emerald-800 ${classOverrides}`}
			{...props}
		>
			{children}
		</button>
	);
}
