import { FormHTMLAttributes } from "react";

export default function Form({
  children,
  classOverrides,
  props,
}: {
  children: React.ReactNode;
  classOverrides?: FormHTMLAttributes<HTMLFormElement>["className"];
  props?: FormHTMLAttributes<HTMLFormElement>;
}) {
  return (
    <form
      className={`flex flex-col gap-[20px] max-w-[550px] bg-gray-200 p-4 sm:p-8 rounded-md mx-auto ${classOverrides}`}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
      {...props}
    >
      {children}
    </form>
  );
}
