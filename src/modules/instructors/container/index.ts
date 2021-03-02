import { container } from 'tsyringe';

import InstructorsRepository from '../infra/typeorm/repositories/InstructorsRepository';
import IInstructorsRepository from '../repositories/IInstructorsRepository';

container.registerSingleton<IInstructorsRepository>(
  'InstructorsRepository',
  InstructorsRepository,
);
