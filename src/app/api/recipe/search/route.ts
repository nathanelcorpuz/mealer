import { NextRequest } from "next/server";
import { HydratedDocument } from "mongoose";
import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { UserDocument } from "@/db/models/User";
import byName from "./utils/byName";
import byIngredient from "./utils/byIngredient";
import byNameAndIngredient from "./utils/byNameAndIngredient";

export const GET = async (request: NextRequest) => {
	try {
		const user: HydratedDocument<UserDocument> | null = await tokenVerifier();

		const { searchParams } = new URL(request.url);
		const name = searchParams.get("name");
		const ingredient = searchParams.get("ingredient");

		if (name && !ingredient) {
			return byName({ user, name });
		}

		if (ingredient && !name) {
			return byIngredient({ user, ingredient });
		}

		if (ingredient && name) {
			return byNameAndIngredient({ user, name, ingredient });
		}

		throw new Error("Must include a search criteria");
	} catch (error) {
		return routeHandlerError(error as Error);
	}
};
