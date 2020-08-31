import{Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.json'

export default (req: Request, res: Response, next: NextFunction) => {
    //Get the jwt token from the head
    const token = <string>req.headers.authorization;
    let jwtPayload;
    if(!token){
      res.status(401).send({error:"No token provided"});
    }

    //Try to validate the token and get data
    try {
      jwtPayload = <any>jwt.verify(token, authConfig.secret);
      res.locals.jwtPayload = jwtPayload;
    } catch (error) {
      //If token is not valid, respond with 401 (unauthorized)
      res.status(401).send({error:"Invalid token"});
      return;
    }

    //The token is valid for 1 hour
    //We want to send a new token on every request
    /*const { userId, username } = jwtPayload;
    const newToken = jwt.sign({ userId, username }, authConfig.secret, {
      expiresIn: "1h"
    });
    */res.setHeader("token", token);

    //Call the next middleware or controller
    next();
  };