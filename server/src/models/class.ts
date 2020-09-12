import { ScheduleItemFull } from "./class_schedule";

export interface Class {
	id: number;
	subject: string;
	cost: number;
	userId: string;
	schedules: ScheduleItemFull[];
}
