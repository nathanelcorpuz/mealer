import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { NextRequest, NextResponse } from "next/server";

export default async function del(request: NextRequest) {
	try {
		const user = await tokenVerifier();
		// wip
		return NextResponse.json({});
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
