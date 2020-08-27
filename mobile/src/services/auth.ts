import api from "./api";
import { User } from "../contexts/auth";

interface Response{
    token:string;
    user:{
        name:string;
        email:string;
    }
}

export function signIn(email:string,password:string):Promise<Response>{
    return new Promise(resolve => {
        api.post('auth',{ email,password }).then((e) => {
            resolve({
                token:e.data.token,
                user: e.data.user
            });
        })
    });
}