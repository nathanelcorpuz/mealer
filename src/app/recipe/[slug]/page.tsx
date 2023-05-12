import RecipeDetails from "./RecipeDetails";

export default function RecipeDetailsPage({
	params,
}: {
	params: { slug: string };
}) {
	return <RecipeDetails slug={params.slug} />;
}
