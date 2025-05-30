// src/modules/student/student.controller.ts

import { Request, Response } from 'express';
import * as StudentService from './student.service';
import { IStudent } from './student.interface';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// student.controller.ts

export const createStudentController = catchAsync(async (req: Request, res: Response) => {
  const { user, ...studentData } = req.body;

  const student = await StudentService.createStudent(user, studentData);

  sendResponse<IStudent>(res, {
    statusCode: 201,
    message: 'Student created successfully',
    data: student,
  });
});



export const getAllStudentsController = catchAsync(async (_req: Request, res: Response) => {
  const students = await StudentService.getAllStudents();
  sendResponse<IStudent[]>(res, {
    statusCode: 200,
    message: 'Students retrieved successfully',
    data: students,
  });
});

export const getSingleStudentController = catchAsync(async (req: Request, res: Response) => {
  const student = await StudentService.getSingleStudent(req.params.id);
  sendResponse<IStudent>(res, {
    statusCode: 200,
    message: 'Student retrieved successfully',
    data: student,
  });
});

export const updateStudentController = catchAsync(async (req: Request, res: Response) => {
  const student = await StudentService.updateStudent(req.params.id, req.body);
  sendResponse<IStudent>(res, {
    statusCode: 200,
    message: 'Student updated successfully',
    data: student,
  });
});

export const deleteStudentController = catchAsync(async (req: Request, res: Response) => {
  await StudentService.deleteStudent(req.params.id);
  sendResponse<null>(res, {
    statusCode: 200,
    message: 'Student deleted successfully',
    data: null,
  });
});
