declare module '*.png';
declare module '*.json';
declare namespace Express {
    export interface Request {
       user?: number
    }
 }
 declare module "nodemailer-express-handlebars" {
		function nodemailerExpressHandlebars(data: any): any;

		module nodemailerExpressHandlebars {}
		export = nodemailerExpressHandlebars;
 }