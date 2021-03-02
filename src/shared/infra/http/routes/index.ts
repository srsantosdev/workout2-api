import { Router } from 'express';

import gymsRouter from '@modules/gyms/infra/http/routes/gyms.routes';
import instructorsRoutes from '@modules/instructors/infra/http/routes/instructors.routes';
import studentsRoutes from '@modules/students/infra/http/routes/students.routes';

const appRoutes = Router();

appRoutes.use('/gyms', gymsRouter);
appRoutes.use('/instructors', instructorsRoutes);
appRoutes.use('/students', studentsRoutes);

export default appRoutes;
