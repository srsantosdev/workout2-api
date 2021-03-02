import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateStudentService from '@modules/students/services/CreateStudentService';

export default class StudentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { document, name } = request.body;

    const createStudentService = container.resolve(CreateStudentService);

    const student = await createStudentService.execute({
      document,
      name,
    });

    return response.json(student);
  }
}
