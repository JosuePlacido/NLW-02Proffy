import express from 'express'; 
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const controllerClass = new ClassesController();
const controllerConnections = new ConnectionsController();
routes.post('/classes',controllerClass.create);

routes.get('/classes',controllerClass.index);
routes.post('/connections',controllerConnections.create);

routes.get('/connections',controllerConnections.index);

export default routes;