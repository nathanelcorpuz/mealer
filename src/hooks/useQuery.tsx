"use client";

import { useEffect, useState } from "react";

export default function useQuery(url: string) {
	const [isSuccess, setIsSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState("");
	const [data, setData] = useState({});

	const runQuery = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			console.log("\n\n");
			console.log("response");
			console.log(response);
			console.log("\n\n");
			const body = await response.text();
			console.log("\n\n");
			console.log("body");
			console.log(body);
			console.log("\n\n");
			if (!response.ok) throw new Error(response.statusText);
			setData(JSON.parse(body));
			setIsSuccess(true);
		} catch (error) {
			setIsError(true);
			setError((error as Error).message);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		runQuery();
	}, []);

	return { isSuccess, isLoading, isError, error, data };
}
