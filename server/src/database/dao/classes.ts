import db from "../connection";

let yup = require("yup");
export default class ClassDAO {
	async getAllByUser(userId: number) {
		return db("classes")
			.where("classes.userId", "=", userId)
			.select(["classes.*"]);
	}
}
