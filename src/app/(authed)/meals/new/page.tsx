import PageWrapper from "@/components/PageWrapper";
import NewMeal from "./NewMeal";
import Link from "next/link";
import Button from "@/components/Button";

export default function NewMealPage() {
	return (
		<PageWrapper>
			<Link href="/meals" className="pb-2 inline-block">
				<Button variant="secondary">Back</Button>
			</Link>
			<NewMeal />
		</PageWrapper>
	);
}
