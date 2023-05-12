import { NextRequest, NextResponse } from "next/server";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import Recipe from "@/db/models/Recipe";

export async function GET(request: NextRequest) {
	try {
		const user = await tokenVerifier();

		const recipes = await Recipe.find({ userId: user?._id });

		const data = {
			username: user?.username,
			recipes,
		};

		return NextResponse.json(data);
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
