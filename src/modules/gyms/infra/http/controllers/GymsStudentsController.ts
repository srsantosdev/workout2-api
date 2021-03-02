import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AddStudentInGymService from '@modules/gyms/services/AddStudentInGymService';

export default class GymsStudentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { student_id, gym_id } = request.query;

    const addStudentInGymService = container.resolve(AddStudentInGymService);

    const gym = await addStudentInGymService.execute({
      gym_id: String(gym_id),
      student_id: String(student_id),
    });

    return response.json(gym);
  }
}
