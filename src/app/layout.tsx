import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Mealer",
	description: "For your recipe management needs",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex gap-[50px] p-4 bg-gray-400">
					<Link href="/">Home</Link>
					<Link href="/auth/register">register</Link>
					<Link href="/auth/login">login</Link>
					<Link href="profile">profile</Link>
				</div>
				{children}
			</body>
		</html>
	);
}
