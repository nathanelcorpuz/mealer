import { cookies as getCookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/db/models/User";
import connectMongo from "@/db/connectMongo";

export default async function tokenVerifier() {
	const cookies = getCookies();

	const tokenCookie = cookies.get("token");

	const user: any = jwt.verify(
		tokenCookie?.value as string,
		process.env.ACCESS_TOKEN_SECRET as string
	);

	if (!user) throw new Error("Invalid token");

	await connectMongo();

	const userDoc = await User.findById(user.userId);

	console.log("resource protected!");

	return userDoc;
}
