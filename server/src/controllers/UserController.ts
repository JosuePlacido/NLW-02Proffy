import{Request,Response} from 'express';
import daoUser from '../database/dao/users';
import User,{UserUpdate} from '../models/user';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import authConfig from '../config/auth.json';
import transporter from "../services/mail";
function generateToken(idUser:number){
    return jwt.sign({ user:idUser},authConfig.secret);
}
export default class UsersController {
	async create(request: Request, response: Response) {
		const user: User = request.body;
		const dao = new daoUser();
		try {
			if (await dao.validateCreate(user)) {
				const userResult = await dao.create(user);
				return response
					.status(201)
					.send({
						user: userResult,
						token: generateToken(userResult.id),
					});
			} else {
				return response.status(400).json({ error: "User invalid" });
			}
		} catch (err) {
			console.log(err);
			return response
				.status(400)
				.json({ error: "User registration failed" });
		}
	}
	async auth(request: Request, response: Response) {
		const dao = new daoUser();
		const { email, password } = request.body;
		const userResult = await dao.getByLogin(email);
		if (
			userResult &&
			(await dao.comparePasswordHash(password, userResult.password))
		) {
			userResult.password = undefined;
			return response
				.status(200)
				.send({
					user: userResult,
					token: generateToken(userResult.id),
				});
		}
		return response.status(401).send({ error: "login failed!" });
	}

	async resetPassword(request: Request, response: Response) {
		const dao = new daoUser();
		const { email, password,token } = request.body;
		const userResult = await dao.getByLogin(email);
		try {
			if (userResult && await dao.CompareToken(userResult.id,token)) {
				await dao.resetPassword(userResult.id,password);
				return response.status(201).send();
			} else {
				return response.status(400).json({ error: "User invalid" });
			}
		} catch (err) {
			console.log(err);
			return response
				.status(400)
				.json({ error: "User registration failed" });
		}
	}
	async forgotPassword(request: Request, response: Response) {
		const dao = new daoUser();
		const { email } = request.body;
		try {
			const userResult = await dao.getByLogin(email);
			if (!userResult) {
				return response.status(400).send({ error: "User not found!" });
			}
			const token = crypto.randomBytes(20).toString("hex");
			const now = new Date();
			now.setHours(now.getHours() + 1);
			await dao.setToken(userResult.id, token, now);
			transporter.sendMail({
				to: email,
				from: "teste@teste.com",
				subject: "Recuperacao de senha",
				html:
					'<a href="http://localhost:3000/reset-password/' +
					token +
					'">clique aqui</a>' /*
				template:'auth/forgot-password',
				context: {user:userResult.name,expire:now, token}*/,
			});
			return response.status(200).send();
		} catch (err) {
			console.log(err);
			return response.status(400).send({ error: "User inválid!" });
		}
	}
	async update(request:Request,response:Response){
		const user: UserUpdate = request.body;
		const dao = new daoUser();
		try {
			if (await dao.validateUpdate(user)) {
				const userResult = await dao.update(user);
				return response.status(201).send({
					user: userResult
				});
			} else {
				return response.status(400).json({ error: "User invalid" });
			}
		} catch (err) {
			console.log(err);
			return response
				.status(400)
				.json({ error: "User registration failed" });
		}
	}
}