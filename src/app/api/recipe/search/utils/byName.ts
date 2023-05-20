import Recipe from "@/db/models/Recipe";
import { UserDocument } from "@/db/models/User";
import { HydratedDocument } from "mongoose";
import { NextResponse } from "next/server";

export default async function byName({
  user,
  name,
}: {
  user: HydratedDocument<UserDocument> | null;
  name: string;
}) {
  const recipes = await Recipe.find({
    userId: user?._id,
    name: { $regex: name, $options: "i" },
  });
  return NextResponse.json({ recipes });
}
