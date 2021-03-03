import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStudentsRepository from '../repositories/IStudentsRepository';
import Student from '../infra/typeorm/entities/Student';

interface IRequest {
  document: string;
}

@injectable()
export default class CheckInStudentService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({ document }: IRequest): Promise<Student> {
    const student = await this.studentsRepository.findByDocument(document);

    if (!student) {
      throw new AppError('Student not found.');
    }

    return student;
  }
}
