import { routeHandlerError } from "@/lib/routeHandlerError";
import tokenVerifier from "@/lib/tokenVerifier";
import { NextRequest } from "next/server";

export default async function post(request: NextRequest) {
	try {
    const user = await tokenVerifier();
    
    const newMealPlan = 
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
