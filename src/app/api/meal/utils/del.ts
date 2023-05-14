import Meal from "@/db/models/Meal";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { NextRequest, NextResponse } from "next/server";

export default async function del(request: NextRequest) {
	try {
		const user = await tokenVerifier();
		if (!user) throw new Error("Account error");

		const { searchParams } = new URL(request.url);
		const _id = searchParams.get("_id");

		await Meal.findByIdAndUpdate(_id, { isDeleted: true });

		await user.updateOne({ $pull: { recipeIds: _id } });

		return NextResponse.json({ success: true, message: "Meal deleted" });
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
