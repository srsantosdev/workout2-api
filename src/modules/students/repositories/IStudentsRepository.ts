import ICreateStudentDTO from '../dtos/ICreateStudentDTO';
import Student from '../infra/typeorm/entities/Student';

export default interface IStudentsRepository {
  create(data: ICreateStudentDTO): Promise<Student>;
  findById(id: string): Promise<Student | undefined>;
  findByDocument(document: string): Promise<Student | undefined>;
  save(instructor: Student): Promise<Student>;
  remove(instructor_id: string): Promise<void>;
}
