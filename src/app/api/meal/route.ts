import { NextRequest } from "next/server";
import post from "./utils/post";

export const POST = async (request: NextRequest) => post(request);
