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
			const response = await fetch(url, { method: "GET", cache: "no-store" });
			if (!response.ok) throw new Error(response.statusText);
			const body = await response.text();
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
