import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { StudentService } from './student.service';


export const StudentController = {
  createStudent: catchAsync(async (req: Request, res: Response) => {
    const result = await StudentService.createStudent(req.body);

    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  }),
};
