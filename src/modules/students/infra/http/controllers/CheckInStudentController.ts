import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CheckInStudentService from '@modules/students/services/CheckInStudentService';

export default class CheckInStudentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { document } = request.body;

    const checkInStudentService = container.resolve(CheckInStudentService);

    const student = await checkInStudentService.execute({
      document,
    });

    return response.json(student);
  }
}
