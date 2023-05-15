import { FormHTMLAttributes } from "react";

export default function Form({
	children,
	props,
}: {
	children: React.ReactNode;
	props: FormHTMLAttributes<HTMLFormElement>;
}) {
	return (
		<form
			className="flex flex-col gap-[20px] max-w-[450px] bg-gray-200 p-4 rounded-md mx-auto"
			{...props}
		>
			{children}
		</form>
	);
}
