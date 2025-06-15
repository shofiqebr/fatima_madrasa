import { Request, Response } from 'express';
import { SubjectService } from './subject.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ISubject } from './subject.interface';

export const SubjectController = {
  createSubject: catchAsync(async (req: Request, res: Response) => {
    const result = await SubjectService.createSubject(req.body);
    sendResponse<ISubject>(res, {
      statusCode: 201,
      message: 'Subject created successfully',
      data: result,
    });
  }),

  getAllSubjects: catchAsync(async (_req: Request, res: Response) => {
    const result = await SubjectService.getAllSubjects();
    sendResponse<ISubject[]>(res, {
      statusCode: 200,
      message: 'Subjects fetched successfully',
      data: result,
    });
  }),

  getSingleSubject: catchAsync(async (req: Request, res: Response) => {
    const result = await SubjectService.getSingleSubject(req.params.id);
    sendResponse<ISubject>(res, {
      statusCode: 200,
      message: 'Subject retrieved successfully',
      data: result,
    });
  }),

  updateSubject: catchAsync(async (req: Request, res: Response) => {
    const result = await SubjectService.updateSubject(req.params.id, req.body);
    sendResponse<ISubject>(res, {
      statusCode: 200,
      message: 'Subject updated successfully',
      data: result,
    });
  }),

  deleteSubject: catchAsync(async (req: Request, res: Response) => {
    const result = await SubjectService.deleteSubject(req.params.id);
    sendResponse<ISubject>(res, {
      statusCode: 200,
      message: 'Subject deleted successfully',
      data: result,
    });
  }),
};