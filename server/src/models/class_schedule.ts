export interface ScheduleItem {
	week_day: number;
	from: string;
	to: string;
}
export interface ScheduleItemFull  extends ScheduleItem{
	id: number;
}
