import { Request, Response } from 'express';
import { HomeworkService } from './homework.service';
import { IHomework } from './homework.interface';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

export const HomeworkController = {
  createHomework: catchAsync(async (req: Request, res: Response) => {
    const result = await HomeworkService.createHomework(req.body);
    sendResponse<IHomework>(res, {
      statusCode: 201,
      message: 'Homework created successfully',
      data: result,
    });
  }),

  getAllHomework: catchAsync(async (_req: Request, res: Response) => {
    const result = await HomeworkService.getAllHomework();
    sendResponse<IHomework[]>(res, {
      statusCode: 200,
      message: 'Homework list retrieved',
      data: result,
    });
  }),

  getSingleHomework: catchAsync(async (req: Request, res: Response) => {
    const result = await HomeworkService.getSingleHomework(req.params.id);
    sendResponse<IHomework>(res, {
      statusCode: 200,
      message: 'Single homework retrieved',
      data: result,
    });
  }),

  updateHomework: catchAsync(async (req: Request, res: Response) => {
    const result = await HomeworkService.updateHomework(req.params.id, req.body);
    sendResponse<IHomework>(res, {
      statusCode: 200,
      message: 'Homework updated successfully',
      data: result,
    });
  }),

  deleteHomework: catchAsync(async (req: Request, res: Response) => {
    const result = await HomeworkService.deleteHomework(req.params.id);
    sendResponse<IHomework>(res, {
      statusCode: 200,
      message: 'Homework deleted',
      data: result,
    });
  }),
};
