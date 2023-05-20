import bcrypt from "bcrypt";
import connectMongo from "@/db/connectMongo";
import User from "@/db/models/User";
import { NextResponse } from "next/server";
import { routeHandlerError } from "@/lib/routeHandlerError";

export async function POST(request: Request) {
  try {
    await connectMongo();
    const { username, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });
    return NextResponse.json({ isSuccess: true });
  } catch (error) {
    return routeHandlerError(error as Error);
  }
}
