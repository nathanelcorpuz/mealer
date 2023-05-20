"use client";

import addNewIcon from "../../../../public/add-new-icon.png";
import Heading from "@/components/Heading";
import ContentWrapper from "../../../components/ContentWrapper";
import IconButton from "@/components/IconButton";
import { useRouter } from "next/navigation";
import useUserQuery from "@/hooks/queries/useUserQuery";
import { Meal, Recipe } from "@/lib/types";
import ClickableListItem from "@/components/ClickableListItem";
import Link from "next/link";
import capitalize from "@/lib/capitalize";

export default function Meals() {
  const router = useRouter();
  const userQuery = useUserQuery();

  return (
    <ContentWrapper>
      <div className="flex gap-[20px] items-center">
        <Heading>Meals</Heading>
        <IconButton
          src={addNewIcon}
          alt="add new icon"
          props={{ onClick: () => router.push("/meals/new") }}
        />
      </div>
      <div>
        {userQuery.isLoading && (
          <p className="text-center">Loading your meals...</p>
        )}
        {userQuery.isSuccess && (
          <ul className="flex flex-col">
            {(userQuery.data.meals as Meal[]).map((meal) => (
              <ClickableListItem key={meal._id}>
                <Link href={`/meals/${meal._id}`}>
                  <p
                    className="text-gray-500 
									group-hover:text-gray-300 text-sm"
                  >{`${capitalize(meal.dayOfWeek)} - ${capitalize(
                    meal.timeOfDay
                  )}`}</p>
                  <p className="font-bold">
                    {capitalize((meal.recipeId as Recipe).name)}
                  </p>
                </Link>
              </ClickableListItem>
            ))}
          </ul>
        )}
      </div>
    </ContentWrapper>
  );
}
