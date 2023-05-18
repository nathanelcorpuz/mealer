import { userQuery } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";

export default function useUserQuery() {
	return useQuery(["user"], { queryFn: userQuery });
}
