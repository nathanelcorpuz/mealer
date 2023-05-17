import Link from "next/link";

export default function CustomLink({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	return (
		<Link
			className="px-4 py-2 text-sm text-gray-500 hover:text-emerald-700 hover:bg-emerald-100"
			href={href}
		>
			{children}
		</Link>
	);
}
