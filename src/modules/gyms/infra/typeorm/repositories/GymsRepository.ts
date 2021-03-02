import ICreateGymDTO from '@modules/gyms/dtos/ICreateGymDTO';
import IGymsRepository from '@modules/gyms/repositories/IGymsRepository';
import { getRepository, Repository } from 'typeorm';
import Gym from '../entities/Gym';

export default class GymsRepository implements IGymsRepository {
  private ormRepository: Repository<Gym>;

  constructor() {
    this.ormRepository = getRepository(Gym);
  }

  public async create({
    document,
    identifier,
    name,
  }: ICreateGymDTO): Promise<Gym> {
    const gym = this.ormRepository.create({
      document,
      identifier,
      name,
    });

    await this.ormRepository.save(gym);

    return gym;
  }

  public async findById(id: string): Promise<Gym | undefined> {
    const findGym = await this.ormRepository.findOne(id);

    return findGym;
  }

  public async findByIdentifier(identifier: string): Promise<Gym | undefined> {
    const findGym = await this.ormRepository.findOne({
      where: { identifier },
    });

    return findGym;
  }

  public async save(gym: Gym): Promise<Gym> {
    await this.ormRepository.save(gym);

    return gym;
  }

  public async remove(gym_id: string): Promise<void> {
    await this.ormRepository.delete(gym_id);
  }
}
