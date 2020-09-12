import { number } from "yup";
import db from "../connection";
import { ScheduleItem, ScheduleItemFull } from '../.././models/class_schedule';
import { converMinutestoHour } from '../../utils/converHourToMinutes';

let yup = require("yup");
export default class ClassScheduleDAO {
	async getAllByClass(classId: number,trx:any) {
		return await (await db("class_schedule")
			.where("classId", "=", classId))
			.map<ScheduleItemFull>(({from,to,...rest}) =>{
			return {
				from:converMinutestoHour(from),
				to: converMinutestoHour(to),
				...rest
			};
		});
	}
}
