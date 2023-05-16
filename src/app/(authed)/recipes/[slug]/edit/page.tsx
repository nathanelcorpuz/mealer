import PageWrapper from "@/components/PageWrapper";
import EditRecipe from "./EditRecipe";
import Link from "next/link";
import Button from "@/components/Button";

export default function EditRecipePage({
	params,
}: {
	params: { slug: string };
}) {
	return (
		<PageWrapper>
			<Link href={`/recipes/${params.slug}`} className="mb-2 block">
				<Button variant="secondary">Back</Button>
			</Link>
			<EditRecipe slug={params.slug} />
		</PageWrapper>
	);
}
