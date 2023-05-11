import mutatorFetcher from "./mutatorFetcher";
import { Credentials } from "./types";

export const registerMutator = (payload: Credentials) =>
	mutatorFetcher("http://localhost:3000/api/auth/register", {
		method: "POST",
		payload,
	});

export const loginMutator = (payload: Credentials) =>
	mutatorFetcher("http://localhost:3000/api/auth/login", {
		method: "POST",
		payload,
	});
