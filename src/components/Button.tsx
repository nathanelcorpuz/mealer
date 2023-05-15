import { ButtonHTMLAttributes } from "react";

export default function Button({
	children,
	props,
	classOverrides,
}: {
	children: React.ReactNode;
	props?: ButtonHTMLAttributes<HTMLButtonElement>;
	classOverrides?: string;
}) {
	return (
		<button
			className={`bg-emerald-700 text-white p-4 rounded-md text-lg font-black uppercase hover:bg-emerald-800 ${classOverrides}`}
			{...props}
		>
			{children}
		</button>
	);
}
