import { container } from 'tsyringe';

import StudentsRepository from '../infra/typeorm/repositories/StudentsRepository';
import IStudentsRepository from '../repositories/IStudentsRepository';

container.registerSingleton<IStudentsRepository>(
  'StudentsRepository',
  StudentsRepository,
);
