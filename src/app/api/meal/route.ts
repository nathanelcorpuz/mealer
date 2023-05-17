import { NextRequest } from "next/server";
import post from "./utils/post";
import get from "./utils/get";
import del from "./utils/del";

export const POST = async (request: NextRequest) => post(request);
export const GET = async (request: NextRequest) => get(request);
export const DELETE = async (request: NextRequest) => del(request);
