import Recipe from "@/db/models/Recipe";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { NextRequest, NextResponse } from "next/server";

export default async function get(request: NextRequest) {
  try {
    const user = await tokenVerifier();

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const recipeDoc = await Recipe.findOne(
      { slug, userId: user?._id },
      { userId: 0 }
    );

    return NextResponse.json(recipeDoc);
  } catch (error) {
    return routeHandlerError(error as Error);
  }
}
