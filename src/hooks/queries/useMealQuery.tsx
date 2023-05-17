import { mealQuery } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";

export default ({ id }: { id: string }) =>
	useQuery(["recipe", id], { queryFn: () => mealQuery(id) });
