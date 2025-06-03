import { Request, Response } from 'express';
import { AttendanceService } from './attendance.service';
import { IAttendance } from './attendance.interface';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

export const createAttendance = catchAsync(async (req: Request, res: Response) => {
  const result = await AttendanceService.createAttendance(req.body);
  sendResponse<IAttendance>(res, {
    statusCode: 201,
    message: 'Attendance created successfully',
    data: result,
  });
});

export const getAllAttendances = catchAsync(async (req: Request, res: Response) => {
  const result = await AttendanceService.getAllAttendances();
  sendResponse<IAttendance[]>(res, {
    statusCode: 200,
    message: 'Attendances retrieved successfully',
    data: result,
  });
});

export const getSingleAttendance = catchAsync(async (req: Request, res: Response) => {
  const result = await AttendanceService.getSingleAttendance(req.params.id);
  sendResponse<IAttendance>(res, {
    statusCode: 200,
    message: 'Attendance retrieved successfully',
    data: result,
  });
});

export const updateAttendance = catchAsync(async (req: Request, res: Response) => {
  const result = await AttendanceService.updateAttendance(req.params.id, req.body);
  sendResponse<IAttendance>(res, {
    statusCode: 200,
    message: 'Attendance updated successfully',
    data: result,
  });
});

export const deleteAttendance = catchAsync(async (req: Request, res: Response) => {
  const result = await AttendanceService.deleteAttendance(req.params.id);
  sendResponse<IAttendance>(res, {
    statusCode: 200,
    message: 'Attendance deleted successfully',
    data: result,
  });
});
