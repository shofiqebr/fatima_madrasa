import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { classZodSchema } from './class.validation';
import { ClassController } from './class.controller';

const classRouter = express.Router();

classRouter.post(
  '/class',
  validateRequest(classZodSchema),
  ClassController.createClass
);

classRouter.get('/class', ClassController.getAllClasses);
classRouter.get('/class/:id', ClassController.getSingleClass);
classRouter.patch(
  '/class/:id',
  validateRequest(classZodSchema),
  ClassController.updateClass
);
classRouter.delete('/class/:id', ClassController.deleteClass);

export default classRouter;
