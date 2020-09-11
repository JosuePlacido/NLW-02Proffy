import yup from 'yup';
import { Class } from './class';
export default interface User{
    "id":number,
    "name":string,
    "surname":string,
    "avatar":string,
    "bio":string,
    "whatsapp":string,
    "email":string,
    "password":string
}
export interface UserUpdate {
	id: number;
	avatar: string;
	bio: string;
	whatsapp: string;
	subjects: Class[];
}