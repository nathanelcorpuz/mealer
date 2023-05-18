import { mealQuery } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";

export default function useMealQuery({ id }: { id: string }) {
	return useQuery(["recipe", id], { queryFn: () => mealQuery(id) });
}
