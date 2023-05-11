import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const { _id } = await tokenVerifier();

		// create new recipe

		return NextResponse.json({ newRecipe: {} });
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
