import { ButtonHTMLAttributes } from "react";

export default function Button({
	children,
	props,
}: {
	children: React.ReactNode;
	props?: ButtonHTMLAttributes<HTMLButtonElement>;
}) {
	return (
		<button
			className="bg-emerald-700 text-white p-4 rounded-md text-lg font-black uppercase hover:bg-emerald-800"
			{...props}
		>
			{children}
		</button>
	);
}
