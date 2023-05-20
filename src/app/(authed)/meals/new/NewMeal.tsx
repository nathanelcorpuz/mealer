"use client";

import ErrorText from "@/components/ErrorText";
import useUserQuery from "@/hooks/queries/useUserQuery";
import { UserData } from "@/lib/types";
import MealForm from "../_components/MealForm";
import { newMealMutator as mutationFn } from "@/lib/mutators";

export default function NewMeal() {
  const userQuery = useUserQuery();

  if (userQuery.isLoading)
    return <p className="text-center">Loading your data...</p>;

  if (userQuery.isError) {
    return <ErrorText>{(userQuery.error as Error).message}</ErrorText>;
  }

  return <MealForm mutationFn={mutationFn} user={userQuery.data as UserData} />;
}
