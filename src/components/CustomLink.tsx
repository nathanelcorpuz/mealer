import Link, { LinkProps } from "next/link";

export default function CustomLink({
  children,
  href,
  classOverrides,
  props,
}: {
  children: React.ReactNode;
  href: string;
  classOverrides?: string;
  props?: Omit<LinkProps, "href">;
}) {
  return (
    <Link
      className={`px-4 py-2 text-sm text-gray-500 hover:text-emerald-700 hover:bg-emerald-100 ${classOverrides}`}
      href={href}
    >
      {children}
    </Link>
  );
}
