import db from '../connection';
import User from '../../models/user';
import bcrypt from 'bcrypt';
import { string, object } from 'yup';

let yup = require('yup');
export default class UserDAO{
    async create(user:User) {
        const hash = await this.hashPassword(user.password);
        user.password = hash;
        await db('users').insert(user);
        return {id:user.id,name:user.name,
            surname:user.surname,email:user.email};
    }
    async getByLogin(email:string){
        return db('users').whereRaw('email LIKE ?', [email]).first();
    }
    async validateCreate(user:User){
        if(await this.getByLogin(user.email)){
            return false;
        }
        return await yup.object().shape({
            name: yup.string().required(),
            surname: yup.string().required(),
            bio: yup.string(),
            email: yup.string().required(),
            whatsapp: yup.string(),
            avatar: yup.string().url(),
            password: yup.string().required()
          }).isValid(user);
    }
    async hashPassword(password:string){
        return await bcrypt.hash(password, 8);
    }
    async comparePasswordHash(password:string,hash:string){
        return await bcrypt.compare(password, hash);
    }
}