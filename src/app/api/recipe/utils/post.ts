import Recipe, { RecipeDocument } from "@/db/models/Recipe";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { Recipe as NewRecipe } from "@/lib/types";
import { HydratedDocument } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export default async function post(request: NextRequest) {
	try {
		const user = await tokenVerifier();

		const newRecipe: NewRecipe = await request.json();

		const newRecipeDoc: HydratedDocument<RecipeDocument> = await Recipe.create({
			userId: user?._id,
			...newRecipe,
		});

		await user?.updateOne({ $push: { recipes: newRecipeDoc._id } });

		return NextResponse.json({ isSuccess: true });
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
