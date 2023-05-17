"use client";

import ErrorText from "@/components/ErrorText";
import useUserQuery from "@/hooks/queries/useUserQuery";
import { UserData } from "@/lib/types";
import MealForm from "../_components/MealForm";

export default function NewMeal() {
	const userQuery = useUserQuery();

	if (userQuery.isLoading) return <p>Loading your data...</p>;

	if (userQuery.isError) {
		return <ErrorText>{(userQuery.error as Error).message}</ErrorText>;
	}

	return <MealForm user={userQuery.data as UserData} />;
}
