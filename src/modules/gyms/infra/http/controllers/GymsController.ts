import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateGymService from '@modules/gyms/services/CreateGymService';

export default class GymsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { document, name, identifier } = request.body;

    const createGymService = container.resolve(CreateGymService);

    const gym = await createGymService.execute({
      document,
      name,
      identifier,
    });

    return response.json(gym);
  }
}
