import { Class } from "../../models/class";
import db from "../connection";

let yup = require("yup");
export default class ClassDAO {
	async getAllByUser(userId: number) {
		return db("classes")
			.where("classes.userId", "=", userId)
			.select(["classes.*"]);
	}
	async update(subject:Class, trx: any) {
		if (trx) {
			return await trx('classes')
				.where("id", "=", subject.id)
				.update(subject, 'id');

		}
		return await db("classes")
			.where("id", "=", subject.id)
			.update(subject, 'id');
	}
}
