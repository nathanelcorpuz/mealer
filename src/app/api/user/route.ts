import { NextRequest, NextResponse } from "next/server";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";

export async function GET(request: NextRequest) {
	try {
		const user = await tokenVerifier();

		return NextResponse.json({ user });
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
