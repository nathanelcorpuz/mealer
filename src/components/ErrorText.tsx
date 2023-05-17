import { HTMLAttributes } from "react";

export default function ErrorText({
	children,
	props,
}: {
	children: React.ReactNode;
	props?: HTMLAttributes<HTMLParagraphElement>;
}) {
	return (
		<p className="text-center text-sm p-4 text-red-500 italic" {...props}>
			{children}
		</p>
	);
}
