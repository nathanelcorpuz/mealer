import connectMongo from "@/server/connectMongo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	await connectMongo();
	return NextResponse.json({ message: "Hello" });
}
