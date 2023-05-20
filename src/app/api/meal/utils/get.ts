import Meal from "@/db/models/Meal";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { NextRequest, NextResponse } from "next/server";

export default async function get(request: NextRequest) {
  try {
    const user = await tokenVerifier();
    if (!user) throw new Error("Account error");

    const { searchParams } = new URL(request.url);
    const _id = searchParams.get("_id");

    const mealDoc = await Meal.findById(_id, { userId: 0 })
      .populate({
        path: "recipeId",
        select: "-userId -isDeleted -dateCreated",
      })
      .exec();

    return NextResponse.json(mealDoc);
  } catch (error) {
    return routeHandlerError(error as Error);
  }
}
