import { useState } from "react";

export default function useMutation({
	mutator,
}: {
	mutator: (payload: any) => Promise<any>;
}) {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState("");

	const mutate = async (payload: any) => {
		setIsLoading(true);
		try {
			const response = await mutator(payload);
			if (!response.ok) throw new Error(response.statusText);
			setIsSuccess(true);
		} catch (error) {
			setIsError(true);
			setError((error as Error).message);
		}
		setIsLoading(false);
	};
	return { isLoading, isError, error, mutate, isSuccess };
}
