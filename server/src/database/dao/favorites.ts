import Favorites from "../../models/favorites";
import db from "../connection";

let yup = require("yup");
export default class FavoritesDAO {
	async getAllByUser(userId: number) {
		return db("favorites").where("user", "=", userId);
	}
	async create(favorite: Favorites) {
		return await db("favorites").insert(favorite);
	}
	async delete(userId: number,classId:number) {
		return await db("favorites").where("user", "=", userId).andWhere('class','=',classId).delete();
	}
}
