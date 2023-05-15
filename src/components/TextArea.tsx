import { LabelHTMLAttributes, TextareaHTMLAttributes } from "react";

export default function TextArea({
	labelText,
	labelProps,
	textAreaProps,
}: {
	labelText: string;
	labelProps: LabelHTMLAttributes<HTMLLabelElement>;
	textAreaProps: TextareaHTMLAttributes<HTMLTextAreaElement>;
}) {
	return (
		<div>
			<label className="text-sm text-gray-500" {...labelProps}>
				{labelText}
			</label>
			<textarea
				rows={5}
				className="w-[100%] border border-gray-300 rounded-md p-2"
				{...textAreaProps}
			/>
		</div>
	);
}
