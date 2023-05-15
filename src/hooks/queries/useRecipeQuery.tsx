import { recipeQuery } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";

export default ({ slug }: { slug: string }) =>
	useQuery(["recipe", slug], {
		queryFn: () => recipeQuery(slug),
	});
