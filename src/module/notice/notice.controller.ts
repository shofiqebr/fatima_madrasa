import { Request, Response } from 'express';
import { INotice } from './notice.interface';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { NoticeService } from './notice.service';

export const NoticeController = {
  createNotice: catchAsync(async (req: Request, res: Response) => {
    const result = await NoticeService.createNotice(req.body);
    sendResponse<INotice>(res, {
      statusCode: 201,
      message: 'Notice created successfully',
      data: result,
    });
  }),

  getAllNotices: catchAsync(async (_req: Request, res: Response) => {
    const result = await NoticeService.getAllNotices();
    sendResponse<INotice[]>(res, {
      statusCode: 200,
      message: 'Notices fetched successfully',
      data: result,
    });
  }),

  getSingleNotice: catchAsync(async (req: Request, res: Response) => {
    const result = await NoticeService.getSingleNotice(req.params.id);
    sendResponse<INotice>(res, {
      statusCode: 200,
      message: 'Notice retrieved successfully',
      data: result,
    });
  }),

  updateNotice: catchAsync(async (req: Request, res: Response) => {
    const result = await NoticeService.updateNotice(req.params.id, req.body);
    sendResponse<INotice>(res, {
      statusCode: 200,
      message: 'Notice updated successfully',
      data: result,
    });
  }),

  deleteNotice: catchAsync(async (req: Request, res: Response) => {
    const result = await NoticeService.deleteNotice(req.params.id);
    sendResponse<INotice>(res, {
      statusCode: 200,
      message: 'Notice deleted successfully',
      data: result,
    });
  }),
};
