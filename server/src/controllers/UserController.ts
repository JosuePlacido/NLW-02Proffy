import{Request,Response} from 'express';
import daoUser from '../database/dao/users';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.json'

function generateToken(idUser:number){
    return jwt.sign({ user:idUser},authConfig.secret);
}
export default class UsersController{
    async create(request:Request,response:Response){        
        const user:User= request.body;
        const dao = new daoUser();
        try {
            if(await dao.validateCreate(user)){
                const userResult = await dao.create(user);
                return response.status(201).send({user:userResult,token:generateToken(userResult.id)});
            }else{
                return response.status(400).json({ error: "User invalid" });
            }
        } catch (err) {
            console.log(err);
            return response.status(400).json({ error: "User registration failed" });
        }
    }
    async auth(request:Request,response:Response){   
        const dao = new daoUser();    
        const {email,password}= request.body;
        const userResult = await dao.getByLogin(email);
        if(userResult && await dao.comparePasswordHash(password,userResult.password)){
            userResult.password = undefined;
            return response.status(200).send({user:userResult,token:generateToken(userResult.id)});
        }
        return response.status(401).send({ error: "login failed!" });        
    }
}