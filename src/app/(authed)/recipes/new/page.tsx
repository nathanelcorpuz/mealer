import PageWrapper from "@/components/PageWrapper";
import NewRecipe from "./NewRecipe";
import Link from "next/link";
import Button from "@/components/Button";

export default function NewRecipePage() {
	return (
		<PageWrapper>
			<Link href="/recipes" className="mb-2 block">
				<Button variant="secondary">Back</Button>
			</Link>
			<NewRecipe />
		</PageWrapper>
	);
}
