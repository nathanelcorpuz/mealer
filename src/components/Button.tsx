import { ButtonHTMLAttributes } from "react";

export default function Button({
	children,
	buttonProps,
}: {
	children: React.ReactNode;
	buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}) {
	return (
		<button
			className="bg-emerald-700 text-white p-4 rounded-md text-lg font-black uppercase"
			{...buttonProps}
		>
			{children}
		</button>
	);
}
