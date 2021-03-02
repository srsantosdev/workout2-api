import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';

import Instructor from '../infra/typeorm/entities/Instructor';
import IInstructorsRepository from '../repositories/IInstructorsRepository';

interface IRequest {
  name: string;
  specialty: string;
  email: string;
  password: string;
}

@injectable()
export default class CreateInstructorService {
  constructor(
    @inject('InstructorsRepository')
    private instructorsRepository: IInstructorsRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    specialty,
    email,
    password,
  }: IRequest): Promise<Instructor> {
    const findByEmail = await this.instructorsRepository.findByEmail(email);

    if (findByEmail) {
      throw new AppError('Instructor already exists.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const createdInstructor = await this.instructorsRepository.create({
      name,
      specialty,
      email,
      password: hashedPassword,
    });

    return createdInstructor;
  }
}
