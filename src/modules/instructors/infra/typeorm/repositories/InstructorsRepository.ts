import ICreateInstructorDTO from '@modules/instructors/dtos/ICreateInstructorDTO';
import IInstructorsRepository from '@modules/instructors/repositories/IInstructorsRepository';
import { getRepository, Repository } from 'typeorm';
import Instructor from '../entities/Instructor';

export default class InstructorsRepository implements IInstructorsRepository {
  private ormRepository: Repository<Instructor>;

  constructor() {
    this.ormRepository = getRepository(Instructor);
  }

  public async create({
    email,
    name,
    password,
    specialty,
  }: ICreateInstructorDTO): Promise<Instructor> {
    const instructor = this.ormRepository.create({
      email,
      name,
      password,
      specialty,
    });

    await this.ormRepository.save(instructor);

    return instructor;
  }

  public async findById(id: string): Promise<Instructor | undefined> {
    const findInstructor = await this.ormRepository.findOne(id);

    return findInstructor;
  }

  public async findByEmail(email: string): Promise<Instructor | undefined> {
    const findInstructor = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return findInstructor;
  }

  public async save(instructor: Instructor): Promise<Instructor> {
    await this.ormRepository.save(instructor);

    return instructor;
  }

  public async remove(instructor_id: string): Promise<void> {
    await this.ormRepository.delete(instructor_id);
  }
}
