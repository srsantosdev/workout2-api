import ICreateStudentDTO from '@modules/students/dtos/ICreateStudentDTO';
import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import { getRepository, Repository } from 'typeorm';
import Student from '../entities/Student';

export default class StudentsRepository implements IStudentsRepository {
  private ormRepository: Repository<Student>;

  constructor() {
    this.ormRepository = getRepository(Student);
  }

  public async create({ name, document }: ICreateStudentDTO): Promise<Student> {
    const student = this.ormRepository.create({
      name,
      document,
    });

    await this.ormRepository.save(student);

    return student;
  }

  public async findById(id: string): Promise<Student | undefined> {
    const findStudent = await this.ormRepository.findOne(id);

    return findStudent;
  }

  public async findByDocument(document: string): Promise<Student | undefined> {
    const findStudent = await this.ormRepository.findOne({
      where: { document },
    });

    return findStudent;
  }

  public async save(student: Student): Promise<Student> {
    await this.ormRepository.save(student);

    return student;
  }

  public async remove(student_id: string): Promise<void> {
    await this.ormRepository.delete(student_id);
  }
}
