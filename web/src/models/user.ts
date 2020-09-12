import { Class } from "./class";

export interface User{
	id:number;
	email: string;
	name: string;
	surname: string;
	avatar: string;
	bio: string;
	whatsapp: string;
	subjects:Class[]
}