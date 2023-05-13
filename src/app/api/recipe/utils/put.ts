import Recipe from "@/db/models/Recipe";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { Recipe as NewRecipe } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export default async function put(request: NextRequest) {
	try {
		await tokenVerifier();
		const newRecipe: NewRecipe = await request.json();

		const updatedRecipeDoc = await Recipe.findByIdAndUpdate(
			newRecipe._id,
			newRecipe,
			{ returnDocument: "after" }
		);

		return NextResponse.json(updatedRecipeDoc);
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
