import ICreateInstructorDTO from '../dtos/ICreateInstructorDTO';
import Instructor from '../infra/typeorm/entities/Instructor';

export default interface IInstructorsRepository {
  create(data: ICreateInstructorDTO): Promise<Instructor>;
  findById(id: string): Promise<Instructor | undefined>;
  findByEmail(email: string): Promise<Instructor | undefined>;
  save(instructor: Instructor): Promise<Instructor>;
  remove(instructor_id: string): Promise<void>;
}
