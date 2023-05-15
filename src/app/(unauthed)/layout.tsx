export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<h1>Unauthed layout</h1>
			{children}
		</main>
	);
}
