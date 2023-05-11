import bcrypt from "bcrypt";
import connectMongo from "@/server/connectMongo";
import User from "@/server/models/User";
import { NextResponse } from "next/server";
import { routeHandlerError } from "@/lib/routeHandlerError";

export async function POST(request: Request) {
	try {
		await connectMongo();
		const { username, password } = await request.json();
		const hashedPassword = await bcrypt.hash(password, 10);
		await User.create({ username, password: hashedPassword });
		return NextResponse.json({
			success: true,
			message: "Registration success!",
		});
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
