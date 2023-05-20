import { ButtonHTMLAttributes } from "react";

export default function ClickableListItem({
  children,
  buttonProps,
}: {
  children: React.ReactNode;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}) {
  return (
    <li>
      <button className="w-[100%] text-sm group hover:bg-emerald-700 hover:text-white border-b-[1px] border-b-gray-300 py-4 ps-2 text-start text-emerald-700">
        {children}
      </button>
    </li>
  );
}
