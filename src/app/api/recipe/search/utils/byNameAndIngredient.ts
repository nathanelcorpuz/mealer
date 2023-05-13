import Recipe from "@/db/models/Recipe";
import { UserDocument } from "@/db/models/User";
import { HydratedDocument } from "mongoose";
import { NextResponse } from "next/server";

export default async function byNameAndIngredient({
	user,
	name,
	ingredient,
}: {
	user: HydratedDocument<UserDocument> | null;
	name: string;
	ingredient: string;
}) {
	const recipes = await Recipe.find({
		userId: user?._id,
		$or: [
			{ name: { $regex: name, $options: "i" } },
			{
				ingredients: {
					$elemMatch: {
						ingredient: { $regex: ingredient, $options: "i" },
					},
				},
			},
		],
	});
	return NextResponse.json({ recipes });
}
