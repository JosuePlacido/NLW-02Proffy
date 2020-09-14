import { ClassSchedule } from './class_schedule';
export interface Class{
	id:number;
	subject:string;
	cost:string;
	userId:number;
	schedules: ClassSchedule[];
}