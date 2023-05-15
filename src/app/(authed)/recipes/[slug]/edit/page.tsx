import EditRecipe from "./EditRecipe";

export default function EditRecipePage({
	params,
}: {
	params: { slug: string };
}) {
	return <EditRecipe slug={params.slug} />;
}
