import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Gym from '../infra/typeorm/entities/Gym';
import IGymsRepository from '../repositories/IGymsRepository';

interface IRequest {
  name: string;
  document: string;
  identifier: string;
}

@injectable()
export default class CreateGymService {
  constructor(
    @inject('GymsRepository')
    private gymsRepository: IGymsRepository,
  ) {}

  public async execute({ name, document, identifier }: IRequest): Promise<Gym> {
    const findByIdentifier = await this.gymsRepository.findByIdentifier(
      identifier,
    );

    if (findByIdentifier) {
      throw new AppError('Company already exists.');
    }

    const createdGym = await this.gymsRepository.create({
      document,
      identifier,
      name,
    });

    return createdGym;
  }
}
