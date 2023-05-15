import Recipe from "./Recipe";

export default function RecipeDetailsPage({
	params,
}: {
	params: { slug: string };
}) {
	return <Recipe slug={params.slug} />;
}
