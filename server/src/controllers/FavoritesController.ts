import { Request, Response } from "express";
import db from "../database/connection";
import ClassScheduleDAO from "../database/dao/class_schedule";
import FavoritesDAO from "../database/dao/favorites";

export default class FavoritesController {
	async index(request: Request, response: Response) {
		const dao = new FavoritesDAO();
		const daoSchedule = new ClassScheduleDAO();
		let favorites = await dao.getAllByUser(
			parseInt(request.query.user as string)
		);
		for(let x=0;x<favorites.length;x++){
			let classes = await db("classes")
				.where("classes.id", "=", favorites[x].class)
				.join("users", "classes.userId", "=", "users.id")
				.select([
					"classes.*",
					"users.name",
					"users.surname",
					"users.avatar",
					"users.bio",
					"users.whatsapp",
				]);
			classes[0].schedules = await daoSchedule.getAllByClass(classes[0].id);
			favorites[x].item = classes[0];
		}
		return response.json(favorites);
	}
	async create(request: Request, response: Response) {
		const favorite = request.body;
		const dao = new FavoritesDAO();
		const id = await dao.create(favorite);
		const proffy = await db("classes")
			.where("classes.id", "=", favorite.class)
			.join("users", "classes.userId", "=", "users.id")
			.select([
				"classes.*",
				"users.name",
				"users.surname",
				"users.avatar",
				"users.bio",
				"users.whatsapp",
			]);
			const schedules = await new ClassScheduleDAO().getAllByClass(favorite.class);
		return response.status(201).send({ id, proffy, schedules });
	}
	async delete(request: Request, response: Response) {
		const user = request.query.user as string;
		const classId = request.query.classId as string;
		const dao = new FavoritesDAO();
		await dao.delete(parseInt(user),parseInt(classId));
		return response.status(201).send();
	}
}
