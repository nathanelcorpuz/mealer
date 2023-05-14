import { userQuery } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";

export default function useUser() {
	return useQuery(["user"], { queryFn: userQuery });
}
