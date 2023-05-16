import PageWrapper from "@/components/PageWrapper";
import Recipe from "./Recipe";
import Link from "next/link";
import Button from "@/components/Button";

export default function RecipeDetailsPage({
	params,
}: {
	params: { slug: string };
}) {
	return (
		<PageWrapper>
			<Link href="/recipes" className="mb-2 block">
				<Button variant="secondary">Back</Button>
			</Link>
			<Recipe slug={params.slug} />
		</PageWrapper>
	);
}
