// src/modules/teacher/teacher.route.ts

import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createTeacherZodSchema } from './teacher.validation';
import { TeacherController } from './teacher.controller';

export const teacherRouter = express.Router();

teacherRouter.post(
  '/teacher',
  validateRequest(createTeacherZodSchema),
  TeacherController.createTeacher,
);
teacherRouter.get('/teacher', TeacherController.getAllTeachers);
teacherRouter.get('/teacher/:id', TeacherController.getSingleTeacher);
teacherRouter.patch('/teacher/:id', TeacherController.updateTeacher);
teacherRouter.delete('/teacher/:id', TeacherController.deleteTeacher);
