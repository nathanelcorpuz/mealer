import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/providers/Providers";
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
				<Providers>
					<h1>From root layout</h1>
					<Link href="register">Register</Link>
					<Link href="recipe">Recipe</Link>
					<Link href="/">Home</Link>
					{children}
				</Providers>
			</body>
		</html>
	);
}
