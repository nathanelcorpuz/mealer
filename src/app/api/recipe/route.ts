import Recipe, { RecipeDocument } from "@/db/models/Recipe";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { Recipe as NewRecipe } from "@/lib/types";
import { HydratedDocument } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const user = await tokenVerifier();

		const newRecipe: NewRecipe = await request.json();

		const newRecipeDoc: HydratedDocument<RecipeDocument> = await Recipe.create({
			userId: user?._id,
			...newRecipe,
		});

		await user?.updateOne({ $push: { recipes: newRecipeDoc._id } });

		return NextResponse.json({ newRecipeDoc });
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const slug = searchParams.get("slug");

		const recipeDoc = await Recipe.findOne({ slug });

		return NextResponse.json(recipeDoc);
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
