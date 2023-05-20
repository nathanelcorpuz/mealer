"use client";

import Button from "@/components/Button";
import YesNoConfirmation from "@/components/YesNoConfirmation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MealView from "../../_components/MealView";
import useUserQuery from "@/hooks/queries/useUserQuery";
import ErrorText from "@/components/ErrorText";
import { Meal, UserData } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";
import { deleteMealMutator as mutationFn } from "@/lib/mutators";

export default function Meal({ id }: { id: string }) {
  const router = useRouter();
  const userQuery = useUserQuery();
  const mutation = useMutation({ mutationFn });

  let mealView;

  if (userQuery.isLoading) {
    mealView = <p className="text-center">Loading your meal...</p>;
  }

  if (userQuery.isSuccess) {
    mealView = (
      <MealView
        meal={
          (userQuery.data as UserData).meals.find(
            (meal) => meal._id === id
          ) as Meal
        }
      />
    );
  }

  if (userQuery.isError) {
    mealView = (
      <ErrorText>An error occurred while getting your meal...</ErrorText>
    );
  }

  return (
    <section className="max-w-[550px] mx-auto">
      {mealView}
      <div className="flex flex-col gap-[10px] pt-[10px]">
        <YesNoConfirmation
          heading="Delete this meal?"
          onNo={() => router.push("/meals/" + id)}
          onYes={async () => {
            const result = await mutation.mutateAsync({ _id: id });
            if (result.isSuccess) router.push("/meals");
          }}
        />
      </div>
    </section>
  );
}
