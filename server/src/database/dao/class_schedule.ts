import db from "../connection";

let yup = require("yup");
export default class ClassScheduleDAO {
	async getAllByClass(classId: number) {
		return db("class_schedule").where("classId", "=", classId);
	}
}
