import PageWrapper from "@/components/PageWrapper";
import NewRecipeForm from "./NewRecipeForm";
import Link from "next/link";
import Button from "@/components/Button";

export default function NewRecipePage() {
	return (
		<PageWrapper>
			<Link href="/recipes" className="mb-2 block">
				<Button variant="secondary">Back</Button>
			</Link>
			<NewRecipeForm />
		</PageWrapper>
	);
}
