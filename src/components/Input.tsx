import { InputHTMLAttributes, LabelHTMLAttributes } from "react";

export default function Input({
	labelProps,
	labelText,
	inputProps,
}: {
	labelProps: LabelHTMLAttributes<HTMLLabelElement>;
	labelText: string;
	inputProps: InputHTMLAttributes<HTMLInputElement>;
}) {
	return (
		<div className="flex flex-col">
			<label className="text-sm text-gray-500" {...labelProps}>
				{labelText}
			</label>
			<input
				className="border border-gray-300 rounded-md p-2"
				{...inputProps}
			/>
		</div>
	);
}
