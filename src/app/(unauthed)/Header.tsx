import Link from "next/link";

export default function Header() {
	return (
		<header className="flex">
			<Link
				className="px-4 py-2 text-gray-900 hover:text-emerald-700"
				href="register"
			>
				Register
			</Link>
			<Link
				className="px-4 py-2 text-gray-900 hover:text-emerald-700"
				href="login"
			>
				Login
			</Link>
			<Link
				className="px-4 py-2 text-gray-900 hover:text-emerald-700"
				href="how"
			>
				How to use
			</Link>
		</header>
	);
}
