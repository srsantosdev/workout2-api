import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateInstructorService from '@modules/instructors/services/CreateInstructorService';

export default class InstructorsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, name, password, specialty } = request.body;
    const { gym_id } = request.query;

    const createInstructorService = container.resolve(CreateInstructorService);

    const instructor = await createInstructorService.execute({
      email,
      name,
      password,
      specialty,
      gym_id: String(gym_id),
    });

    return response.json(instructor);
  }
}
