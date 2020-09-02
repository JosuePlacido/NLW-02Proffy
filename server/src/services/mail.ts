import * as nodemailer from "nodemailer";
import path from 'path';
import {host,port,user,password} from '../config/mailer.json';
import hbs from  'nodemailer-express-handlebars';
const transporter = nodemailer.createTransport({
	host,
	port,
	secure: false,
	auth: {
		user,
		pass:password,
	},
	tls: { rejectUnauthorized: false },
});
transporter.use(
	"compile",
	hbs({
		viewEngine: "handleBars",
		viewPath: path.resolve('./src/resources/mail/'),
		extName: '.html'
	})
);

export default transporter;