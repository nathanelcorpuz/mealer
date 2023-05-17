import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Header from "./_components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
	const cookieStore = cookies();
	const token = cookieStore.get("token");

	if (!token) redirect("/login");

	return (
		<main>
			<Header />
			{children}
		</main>
	);
}
