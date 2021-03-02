import { Router } from 'express';
import InstructorsController from '../controllers/InstructorsController';

const instructorsController = new InstructorsController();
const instructorsRoutes = Router();

instructorsRoutes.post('/', instructorsController.create);

export default instructorsRoutes;
