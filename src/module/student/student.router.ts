// src/modules/student/student.routes.ts

import express from 'express';
import {
  createStudentController,
  deleteStudentController,
  getAllStudentsController,
  getSingleStudentController,
  updateStudentController,
} from './student.controller';

import validateRequest from '../../middlewares/validateRequest';
import { createStudentWithUserZodSchema } from './student.validation';

const studentRouter = express.Router();

studentRouter.post('/student', validateRequest(createStudentWithUserZodSchema), createStudentController);
studentRouter.get('/student', getAllStudentsController);
studentRouter.get('/student/:id', getSingleStudentController);
studentRouter.patch('/student/:id', updateStudentController);
studentRouter.delete('/student/:id', deleteStudentController);

export default studentRouter;
