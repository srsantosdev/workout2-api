import { Router } from 'express';
import GymsController from '../controllers/GymsController';
import GymsStudentsController from '../controllers/GymsStudentsController';

const gymsController = new GymsController();
const gymsStudentsController = new GymsStudentsController();

const gymsRouter = Router();

gymsRouter.post('/add-students', gymsStudentsController.create);
gymsRouter.post('/', gymsController.create);

export default gymsRouter;
