import { Router } from 'express';
import StudentsController from '../controllers/StudentsController';

const studentsController = new StudentsController();
const studentsRoutes = Router();

studentsRoutes.post('/', studentsController.create);

export default studentsRoutes;
