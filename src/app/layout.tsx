import Auth0 from "@/providers/Auth0";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthButton from "@/components/AuthButton";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

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
				<Auth0>
					<div className="flex gap-[50px]">
						<AuthButton>Sign in / Sign up</AuthButton>
						<Link href="/">Home</Link>
						<Link href="profile">Profile</Link>
						<LogoutButton>Sign out</LogoutButton>
					</div>
					{children}
				</Auth0>
			</body>
		</html>
	);
}
