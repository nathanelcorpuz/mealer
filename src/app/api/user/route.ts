import { NextResponse } from "next/server";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import Recipe from "@/db/models/Recipe";
import Meal from "@/db/models/Meal";

export async function GET() {
	try {
		const user = await tokenVerifier();

		const recipes = await Recipe.find(
			{ userId: user?._id, isDeleted: false },
			{ name: 1, slug: 1, description: 1 }
		);

		const meals = await Meal.find(
			{ userId: user?._id, isDeleted: false },
			{ userId: 0 }
		);

		const data = {
			username: user?.username,
			recipes,
			meals,
		};

		return NextResponse.json(data);
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}

export const dynamic = "force-dynamic";
