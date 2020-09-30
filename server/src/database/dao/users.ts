import db from "../connection";
import User, { UserUpdate } from "../../models/user";
import bcrypt from "bcrypt";
import { string, object } from "yup";
import converHourToMinutes from "../../utils/converHourToMinutes";

let yup = require("yup");
export default class UserDAO {
	async create(user: User) {
		const hash = await this.hashPassword(user.password);
		user.password = hash;
		const id = await db("users").insert(user).returning("id");
		return {
			id: id[0],
			name: user.name,
			surname: user.surname,
			email: user.email,
		};
	}
	async update(
		{ id, bio, avatar, whatsapp, subjects }: UserUpdate,
		trx: any
	) {
		if (trx) {
			return await trx("users")
				.where("id", "=", id)
				.update(
					{
						avatar,
						bio,
						whatsapp: whatsapp.replace(/\D/g, ""),
					},
					"id"
				);
		}
		return await db("users")
			.where("id", "=", id)
			.update({
				avatar,
				bio,
				whatsapp: whatsapp.replace(/\D/g, ""),
			});
	}
	async getByLogin(email: string) {
		return db("users").whereRaw("email LIKE ?", [email]).first();
	}
	async validateCreate(user: User) {
		if (await this.getByLogin(user.email)) {
			return false;
		}
		return await yup
			.object()
			.shape({
				name: yup.string().required(),
				surname: yup.string().required(),
				bio: yup.string(),
				email: yup.string().required(),
				whatsapp: yup.string(),
				avatar: yup.string().url(),
				password: yup.string().required(),
			})
			.isValid(user);
	}
	async validateUpdate(user: UserUpdate) {
		if ((await db("users").where("id", user.id).first()) == undefined) {
			return false;
		}
		return await yup
			.object()
			.shape({
				id: yup.number().required(),
				bio: yup.string(),
				whatsapp: yup.string(),
				avatar: yup.string().url(),
			})
			.isValid(user);
	}
	async setToken(user: number, token: string, expire: any) {
		const oldToken = await db("resets_passwords_token")
			.whereRaw("userId = ?", [user])
			.first();
		if (oldToken) {
			console.log(oldToken);
			await db("resets_passwords_token")
				.update({
					token,
					expire,
				})
				.where("userId", user);
		} else
			await db("resets_passwords_token").insert({
				userId: user,
				token,
				expire,
			});
	}
	async CompareToken(user: number, token: string) {
		const result = await db("resets_passwords_token")
			.whereRaw("userId = ? and token = ? and expire <= ?", [
				user,
				token,
				new Date(),
			])
			.first();
		return result !== null;
	}
	async resetPassword(user: number, password: string) {
		const hash = await this.hashPassword(password);
		await db("users")
			.update({
				password: hash,
			})
			.where("id", user);
		await db("resets_passwords_token").where("userId", user).del();
	}
	async hashPassword(password: string) {
		return await bcrypt.hash(password, 8);
	}
	async comparePasswordHash(password: string, hash: string) {
		return await bcrypt.compare(password, hash);
	}
}
