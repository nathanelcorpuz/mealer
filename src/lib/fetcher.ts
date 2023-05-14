const post = (url: string, payload: any) =>
	fetch(url, {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});

const get = (url: string) =>
	fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

const put = (url: string, payload: any) =>
	fetch(url, {
		method: "PUT",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});

const del = (url: string) =>
	fetch(url, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});

const fetcher = { post, get, put, del };

export default fetcher;
