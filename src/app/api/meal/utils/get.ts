import tokenVerifier from "@/lib/tokenVerifier";
import { NextRequest } from "next/server";

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
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
