import { InputHTMLAttributes, LabelHTMLAttributes } from "react";

export default function Input({
  labelProps,
  labelText,
  inputProps,
  inputClassOverrides,
}: {
  labelProps: LabelHTMLAttributes<HTMLLabelElement>;
  labelText: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  inputClassOverrides?: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500" {...labelProps}>
        {labelText}
      </label>
      <input
        className={`border border-gray-300 rounded-md text-sm p-3 ${inputClassOverrides}`}
        {...inputProps}
      />
    </div>
  );
}
