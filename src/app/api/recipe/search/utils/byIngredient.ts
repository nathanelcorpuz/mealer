import Recipe from "@/db/models/Recipe";
import { UserDocument } from "@/db/models/User";
import { HydratedDocument } from "mongoose";
import { NextResponse } from "next/server";

export default async function byIngredient({
  user,
  ingredient,
}: {
  user: HydratedDocument<UserDocument> | null;
  ingredient: string;
}) {
  const recipes = await Recipe.find({
    userId: user?._id,
    ingredients: {
      $elemMatch: { ingredient: { $regex: ingredient, $options: "i" } },
    },
  });
  return NextResponse.json({ recipes });
}
