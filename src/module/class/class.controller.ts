import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { IClass } from './class.interface';
import { ClassService } from './class.service';

export const ClassController = {
  createClass: catchAsync(async (req: Request, res: Response) => {
    const result = await ClassService.createClass(req.body);
    sendResponse<IClass>(res, {
      statusCode: 201,
      message: 'Class created successfully',
      data: result,
    });
  }),

  getAllClasses: catchAsync(async (_req: Request, res: Response) => {
    const result = await ClassService.getAllClasses();
    sendResponse<IClass[]>(res, {
      statusCode: 200,
      message: 'Classes fetched successfully',
      data: result,
    });
  }),

  getSingleClass: catchAsync(async (req: Request, res: Response) => {
    const result = await ClassService.getSingleClass(req.params.id);
    sendResponse<IClass>(res, {
      statusCode: 200,
      message: 'Class retrieved successfully',
      data: result,
    });
  }),

  updateClass: catchAsync(async (req: Request, res: Response) => {
    const result = await ClassService.updateClass(req.params.id, req.body);
    sendResponse<IClass>(res, {
      statusCode: 200,
      message: 'Class updated successfully',
      data: result,
    });
  }),

  deleteClass: catchAsync(async (req: Request, res: Response) => {
    const result = await ClassService.deleteClass(req.params.id);
    sendResponse<IClass>(res, {
      statusCode: 200,
      message: 'Class deleted successfully',
      data: result,
    });
  }),
};
