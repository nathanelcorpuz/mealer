import { NextRequest, NextResponse } from "next/server";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";

export async function GET(request: NextRequest) {
	try {
		const { username, recipes } = await tokenVerifier();

		return NextResponse.json({ username, recipes });
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
