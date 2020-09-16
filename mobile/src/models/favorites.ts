import { Teacher } from "../conponents/teacher-item";

export interface Favorite {
	id: number;
	user: number;
	class: number;
	item:Teacher;
}
