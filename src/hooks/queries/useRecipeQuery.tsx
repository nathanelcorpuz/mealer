import { recipeQuery } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";

export default function useRecipeQuery({ slug }: { slug: string }) {
	return useQuery(["recipe", slug], {
		queryFn: () => recipeQuery(slug),
	});
}
