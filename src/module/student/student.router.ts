import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createStudentZodSchema } from './student.validation';
import { StudentController } from './student.controller';

const router = express.Router();

router.post(
  '/students/create-student',
  validateRequest(createStudentZodSchema),
  StudentController.createStudent
);

export const studentRoutes = router;
