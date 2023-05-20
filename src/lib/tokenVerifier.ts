import { cookies as getCookies } from "next/headers";
import jwt from "jsonwebtoken";
import User, { UserDocument } from "@/db/models/User";
import connectMongo from "@/db/connectMongo";
import { HydratedDocument } from "mongoose";

export default async function tokenVerifier() {
  const cookies = getCookies();
  const tokenCookie = cookies.get("token");

  if (!tokenCookie) throw new Error("Unauthorized");

  const verifiedToken: any = jwt.verify(
    tokenCookie?.value as string,
    process.env.ACCESS_TOKEN_SECRET as string
  );

  if (!verifiedToken) throw new Error("Invalid token");

  await connectMongo();

  const userDoc: HydratedDocument<UserDocument> | null = await User.findById(
    verifiedToken.userId,
    {
      password: 0,
    }
  );

  console.log("resource protected!");

  return userDoc;
}
