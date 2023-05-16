"use client";

import ErrorText from "@/components/ErrorText";
import useUserQuery from "@/hooks/queries/useUserQuery";
import NewMealForm from "./NewMealForm";
import { UserData } from "@/lib/types";

export default function NewMeal() {
	const userQuery = useUserQuery();

	if (userQuery.isLoading) return <p>Loading your data...</p>;

	if (userQuery.isError) {
		return <ErrorText>{(userQuery.error as Error).message}</ErrorText>;
	}

	return <NewMealForm user={userQuery.data as UserData} />;
}
