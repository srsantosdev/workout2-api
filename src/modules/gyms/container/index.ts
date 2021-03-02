import { container } from 'tsyringe';

import GymsRepository from '../infra/typeorm/repositories/GymsRepository';
import IGymsRepository from '../repositories/IGymsRepository';

container.registerSingleton<IGymsRepository>('GymsRepository', GymsRepository);
