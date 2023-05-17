import Meal, { MealDocument } from "@/db/models/Meal";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { NewMeal } from "@/lib/types";
import { HydratedDocument } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export default async function post(request: NextRequest) {
	try {
		const user = await tokenVerifier();
		if (!user) throw new Error("Account error");

		const newMeal: NewMeal = await request.json();

		const newMealDoc: HydratedDocument<MealDocument> = await Meal.create({
			userId: user._id,
			...newMeal,
		});

		await user.updateOne({ $push: { recipeIds: newMealDoc._id } });

		return NextResponse.json({ isSuccess: true });
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
