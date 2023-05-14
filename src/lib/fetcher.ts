const handleResponse = (response: Response) => {
	if (!response.ok) throw new Error(response.statusText);
	return response.json();
};

const post = (url: string, payload: any) =>
	fetch(url, {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(handleResponse);

const get = (url: string) => {
	fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}).then(handleResponse);
};

const put = (url: string, payload: any) =>
	fetch(url, {
		method: "PUT",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(handleResponse);

const del = (url: string) =>
	fetch(url, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	}).then(handleResponse);

const fetcher = { post, get, put, del };

export default fetcher;
