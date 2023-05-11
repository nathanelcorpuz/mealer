import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import connectMongo from "@/server/connectMongo";
import User from "@/server/models/User";
import { NextRequest, NextResponse } from "next/server";
import { routeHandlerError } from "@/lib/routeHandlerError";

export async function POST(request: NextRequest) {
	try {
		await connectMongo();
		const { username, password } = await request.json();

		const userDoc = await User.findOne({ username });

		await bcrypt.compare(password, userDoc.password);

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
				"Set-Cookie": `token=${accessToken}; expires=604800; httpOnly=true`,
			},
		});
	} catch (error) {
		return routeHandlerError(error as Error);
	}
}
