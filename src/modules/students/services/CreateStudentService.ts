import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStudentsRepository from '../repositories/IStudentsRepository';
import Student from '../infra/typeorm/entities/Student';

interface IRequest {
  name: string;
  document: string;
}

@injectable()
export default class CreateStudentService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({ name, document }: IRequest): Promise<Student> {
    const findByDocument = await this.studentsRepository.findByDocument(
      document,
    );

    if (findByDocument) {
      throw new AppError('Student already exists.');
    }

    const createdStudent = await this.studentsRepository.create({
      name,
      document,
    });

    return createdStudent;
  }
}
