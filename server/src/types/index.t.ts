declare module '*.png';
declare module '*.json';
declare namespace Express {
    export interface Request {
       user?: number
    }
 }