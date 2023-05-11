import fetcher from "./fetcher";
import { Credentials } from "./types";

export const registerMutator = (payload: Credentials) =>
	fetcher.post("http://localhost:3000/api/auth/register", payload);

export const loginMutator = (payload: Credentials) =>
	fetcher.post("http://localhost:3000/api/auth/login", payload);
