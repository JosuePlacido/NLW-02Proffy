import { Request, Response } from "express";
import FavoritesDAO from "../database/dao/favorites";

export default class FavoritesController {
	async index(request: Request, response: Response) {
		const dao = new FavoritesDAO();

		const favorites = await dao.getAllByUser(
			parseInt(request.query.user as string)
		);
		return response.json(favorites);
	}
	async create(request: Request, response: Response) {
		const favorite = request.body;
		const dao = new FavoritesDAO();
		await dao.create(favorite);
		return response.status(201).send();
	}
	async delete(request: Request, response: Response) {
		const favorite = request.query.id as string;
		const dao = new FavoritesDAO();
		await dao.delete(parseInt(favorite));
		return response.status(201).send();
	}
}
