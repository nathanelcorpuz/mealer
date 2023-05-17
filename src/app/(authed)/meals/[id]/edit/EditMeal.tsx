"use client";

import useUserQuery from "@/hooks/queries/useUserQuery";
import MealForm from "../../_components/MealForm";
import ErrorText from "@/components/ErrorText";

export default function EditMeal({ id }: { id: string }) {
	const userQuery = useUserQuery();

	if (userQuery.isLoading) return <p>Loading your data...</p>;

	if (userQuery.isError) {
		return <ErrorText>{(userQuery.error as Error).message}</ErrorText>;
	}

	return (
		<section>
			<MealForm user={userQuery.data} mealId={id} />
		</section>
	);
}
