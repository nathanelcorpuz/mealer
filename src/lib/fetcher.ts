const post = (url: string, payload: any) =>
	fetch(url, {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});

const fetcher = { post };

export default fetcher;
