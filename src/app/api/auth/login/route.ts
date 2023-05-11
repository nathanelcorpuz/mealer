import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import connectMongo from "@/db/connectMongo";
import User from "@/db/models/User";
import { NextRequest, NextResponse } from "next/server";
import { routeHandlerError } from "@/lib/routeHandlerError";

export async function POST(request: NextRequest) {
	try {
		await connectMongo();
		const { username, password } = await request.json();

		const userDoc = await User.findOne({ username });

		if (!userDoc) throw new Error("Invalid username or password");

		const isPasswordCorrect = await bcrypt.compare(password, userDoc.password);

		if (!isPasswordCorrect) throw new Error("Invalid username or password");

		const accessToken = jwt.sign(
			{ userId: userDoc._id },
			process.env.ACCESS_TOKEN_SECRET as string,
			{
				expiresIn: "7d",
			}
		);

		return new NextResponse("Login success", {
			status: 200,
			headers: {
				"Set-Cookie": `token=${accessToken}; max-age=604800; httpOnly=true; path="/"`,
			},
		});
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
