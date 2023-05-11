interface Options {
	method: string;
	payload: any;
}

const mutatorFetcher = (url: string, options: Options) =>
	fetch(url, {
		method: options.method,
		body: JSON.stringify(options.payload),
		headers: {
			"Content-Type": "application/json",
		},
	});

export default mutatorFetcher;
