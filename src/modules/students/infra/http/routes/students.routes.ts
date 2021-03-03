import { Router } from 'express';
import StudentsController from '../controllers/StudentsController';
import CheckInStudentController from '../controllers/CheckInStudentController';

const studentsController = new StudentsController();
const checkInStudentController = new CheckInStudentController();

const studentsRoutes = Router();

studentsRoutes.post('/checkin', checkInStudentController.create);
studentsRoutes.post('/', studentsController.create);

export default studentsRoutes;
