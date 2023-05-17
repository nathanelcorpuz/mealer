import Meal from "@/db/models/Meal";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { EditMeal } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export default async (request: NextRequest) => {
	// wip
	try {
		const user = await tokenVerifier();
		if (!user) throw new Error("Account error");

		const newMeal: EditMeal = await request.json();

		await Meal.findByIdAndUpdate(newMeal._id, newMeal);

		return NextResponse.json({ isSuccess: true });
	} catch (error) {
		return routeHandlerError(error as Error);
	}
};
