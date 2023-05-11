"use client";

import Link from "next/link";

export default function Header() {
	return (
		<div className="flex gap-[50px] p-4 bg-gray-400">
			<Link href="/">Home</Link>
			<Link href="/auth/register">register</Link>
			<Link href="/auth/login">login</Link>
			<Link href="profile">profile</Link>
			<Link href="recipe">recipe</Link>
		</div>
	);
}
