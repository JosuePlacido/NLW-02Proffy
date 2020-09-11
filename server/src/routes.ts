import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UserController';
import authMiddleware from './middlewares/auth';
const routes = express.Router();

const controllerClass = new ClassesController();
const usersController = new UsersController();
const controllerConnections = new ConnectionsController();

routes.post('/users',usersController.create);
routes.put('/users',usersController.update);
routes.post('/auth',usersController.auth);
routes.post('/recovery-password',usersController.forgotPassword);
routes.post('/reset-password',usersController.resetPassword);
routes.post('/classes',controllerClass.create);
routes.get('/classes',controllerClass.index);
routes.get('/class-schedule',controllerClass.getClass);
routes.post('/connections',controllerConnections.create);
routes.get('/home',[authMiddleware],controllerConnections.index);

export default routes;