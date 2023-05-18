import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Mealer",
	description: "Weekly meal planner and recipe manager",
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
					<div className="flex flex-col justify-between [min-height:100vh]">
						{children}
						<footer className="flex justify-center items-center gap-4 flex-col p-4 bg-gray-200 ">
							<p className="text-sm">
								Made with 💚 by{" "}
								<a
									target="_blank"
									referrerPolicy="no-referrer"
									className="font-bold text-emerald-700"
									href="https://www.linkedin.com/in/nathanelcorpuz/"
								>
									Nathanel Corpuz
								</a>
							</p>
							<p className="italic text-sm text-gray-400">
								Check{" "}
								<a
									target="_blank"
									referrerPolicy="no-referrer"
									className="font-bold text-emerald-700"
									href="https://github.com/nathanelcorpuz/mealer"
								>
									GitHub
								</a>{" "}
								for the source code
							</p>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
