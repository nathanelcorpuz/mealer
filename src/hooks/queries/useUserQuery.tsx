import { userQuery } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";

export default () => useQuery(["user"], { queryFn: userQuery });
