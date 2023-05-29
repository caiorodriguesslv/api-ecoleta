import express, { request, response } from 'express';
import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

//index, show, create, update, delete

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);// index para listar vários.
routes.get('/points', pointsController.index); // index para listar vários.
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);
    

export default routes;