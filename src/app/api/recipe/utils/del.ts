import Recipe from "@/db/models/Recipe";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export default async function del(request: NextRequest) {
	// wip
	try {
		const user = await tokenVerifier();
		const { searchParams } = new URL(request.url);

		const _id = searchParams.get("_id");

		await Recipe.findByIdAndUpdate(_id, { isDeleted: true });

		await user?.updateOne({ isDeleted: true });

		return NextResponse.json({ success: true, message: "Recipe deleted" });
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
