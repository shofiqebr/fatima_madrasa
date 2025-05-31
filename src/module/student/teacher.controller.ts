import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ITeacher } from '../teacher/teacher.interface';
import { TeacherService } from './teacher.service';


export const TeacherController = {
  createTeacher: catchAsync(async (req: Request, res: Response) => {
    const result = await TeacherService.createTeacher(req.body);
    sendResponse<ITeacher>(res, {
      statusCode: 201,
      message: 'Teacher created successfully',
      data: result,
    });
  }),

  getAllTeachers: catchAsync(async (req: Request, res: Response) => {
    const result = await TeacherService.getAllTeachers();
    sendResponse<ITeacher[]>(res, {
      statusCode: 200,
      message: 'All teachers retrieved successfully',
      data: result,
    });
  }),

  getSingleTeacher: catchAsync(async (req: Request, res: Response) => {
    const result = await TeacherService.getSingleTeacher(req.params.id);
    sendResponse<ITeacher | null>(res, {
      statusCode: 200,
      message: 'Teacher retrieved successfully',
      data: result,
    });
  }),

  updateTeacher: catchAsync(async (req: Request, res: Response) => {
    const result = await TeacherService.updateTeacher(req.params.id, req.body);
    sendResponse<ITeacher | null>(res, {
      statusCode: 200,
      message: 'Teacher updated successfully',
      data: result,
    });
  }),

  deleteTeacher: catchAsync(async (req: Request, res: Response) => {
    const result = await TeacherService.deleteTeacher(req.params.id);
    sendResponse<ITeacher | null>(res, {
      statusCode: 200,
      message: 'Teacher deleted successfully',
      data: result,
    });
  }),
};
