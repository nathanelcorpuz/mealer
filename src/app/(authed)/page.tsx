import PageWrapper from "@/components/PageWrapper";
import Home from "./Home";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function HomePage() {
	await sleep(2000);
	return (
		<PageWrapper>
			<Home />
		</PageWrapper>
	);
}
