import { NextResponse } from "next/server";

export const GET = () => {
	return new NextResponse(JSON.stringify({ isSuccess: true }), {
		status: 200,
		headers: {
			"Set-Cookie": `token=; max-age=0; httpOnly=true; path=/;`,
		},
	});
};
