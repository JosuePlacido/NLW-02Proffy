import { User } from "../models/user";
import api from "./api";

interface Response {
	token: string;
	user: User;
}
export function signIn(email: string, password: string): Promise<Response> {
	return new Promise(resolve => {
		api.post('auth', { email, password }).then((e) => {
			resolve({
				token: e.data.token,
				user: e.data.user
			});
		})
	});
}