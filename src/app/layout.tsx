import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import UserProvider from "@/providers/UserProvider";

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
				<UserProvider>
					<Header />
					{children}
				</UserProvider>
			</body>
		</html>
	);
}
