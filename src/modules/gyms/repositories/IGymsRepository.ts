import ICreateGymDTO from '../dtos/ICreateGymDTO';
import Gym from '../infra/typeorm/entities/Gym';

export default interface IGymsRepository {
  create(data: ICreateGymDTO): Promise<Gym>;
  findById(id: string): Promise<Gym | undefined>;
  findByIdentifier(identifier: string): Promise<Gym | undefined>;
  save(gym: Gym): Promise<Gym>;
  remove(gym_id: string): Promise<void>;
}
