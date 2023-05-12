import Recipe from "@/db/models/Recipe";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { NewRecipe } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const { _id: userId } = await tokenVerifier();

		const newRecipe: NewRecipe = await request.json();

		const newRecipeDoc = await Recipe.create({
			userId,
			...newRecipe,
		});

		console.log(newRecipeDoc);

		return NextResponse.json({ newRecipeDoc });
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
