import{Request,Response} from 'express';
import daoUser from '../database/dao/users';
import User,{UserUpdate} from '../models/user';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import authConfig from '../config/auth.json';
import transporter from "../services/mail";
import db from '../database/connection';
import converHourToMinutes from '../utils/converHourToMinutes';
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

		if (await dao.validateUpdate(user)) {
			const trx = await db.transaction();
			try {
				await dao.update(user,trx);
						for(let x = 0;user.subjects && x < user.subjects.length;x++){
							await trx("classes")
								.where('id', '=', user.subjects[x].id)
								.update({
									cost: user.subjects[x].cost
								});
							let removes = await trx("class_schedule")
								.where('classId', '=', user.subjects[x].id)
								.select('id');
							for (let y = 0; user.subjects[x].schedules && y < user.subjects[x].schedules.length; y++){
								const schedule = user.subjects[x].schedules[y];
								if (schedule.id){
									await trx("class_schedule")
										.where('id', '=', user.subjects[x].id)
										.update({
											from: converHourToMinutes(schedule.from), to: converHourToMinutes(schedule.to), week_day: schedule.week_day
										}, 'id');
									removes = removes.filter(si => si.id != schedule.id);
								}else{
									await trx("class_schedule")
										.insert({
											from: converHourToMinutes(schedule.from),
											to: converHourToMinutes(schedule.to),
											week_day: schedule.week_day,
											classId: user.subjects[x].id
										});
								}
							}
							await trx("class_schedule")
								.where('classId', '=', user.subjects[x].id)
								.whereIn('id',removes.map(object=>object.id)).del();
						}
				trx.commit();
			} catch (error) {
				// If we get here, that means that neither the 'Old Books' catalogues insert,
				// nor any of the books inserts will have taken place.
				trx.rollback();
				console.log(error)
				return response.status(500).json({
					error,
				});
			}

			return response.status(201).send();
		} else {
			return response.status(400).json({ error: "User invalid" });
		}
	}
}