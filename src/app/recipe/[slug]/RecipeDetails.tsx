import useQuery from "@/hooks/useQuery";

export default function RecipeDetails({ slug }: { slug: string }) {
	const recipeQuery = useQuery("http://localhost:3000/api/recipe?slug=" + slug);

	return (
		<main>
			{recipeQuery.isLoading && <p>Loading your recipe...</p>}
			{}
			<p>Details of recipe: {slug}</p>
		</main>
	);
}
