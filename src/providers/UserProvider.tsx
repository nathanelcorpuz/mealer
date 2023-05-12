"use client";

import useQuery from "@/hooks/useQuery";
import { Query } from "@/lib/types";
import { createContext } from "react";

export const UserContext = createContext<Query>({
	isSuccess: false,
	isLoading: false,
	isError: false,
	error: "",
	data: {},
});

export default function UserProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const query = useQuery("http://localhost:3000/api/user");
	return <UserContext.Provider value={query}>{children}</UserContext.Provider>;
}
