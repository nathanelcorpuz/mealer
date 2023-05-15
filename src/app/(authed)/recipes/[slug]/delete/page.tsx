import DeleteRecipe from "./DeleteRecipe";

export default function DeleteRecipePage({
	params,
}: {
	params: { slug: string };
}) {
	return <DeleteRecipe slug={params.slug} />;
}
