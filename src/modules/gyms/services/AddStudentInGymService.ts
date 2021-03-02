import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import IGymsRepository from '../repositories/IGymsRepository';

interface IRequest {
  student_id: string;
  gym_id: string;
}

@injectable()
export default class AddStudentInGymService {
  constructor(
    @inject('GymsRepository')
    private gymsRepository: IGymsRepository,

    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({ student_id, gym_id }: IRequest): Promise<void> {
    const student = await this.studentsRepository.findById(student_id);

    if (!student) {
      throw new AppError('Student not found.');
    }

    const gym = await this.gymsRepository.findById(gym_id);

    if (!gym) {
      throw new AppError('Gym not found.');
    }

    gym.students.push(student);
    await this.gymsRepository.save(gym);
  }
}
