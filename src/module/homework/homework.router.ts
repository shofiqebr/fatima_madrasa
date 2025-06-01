import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { homeworkZodSchema } from './homework.validation';
import { HomeworkController } from './homework.controller';

const homeworkRouter = express.Router();

homeworkRouter.post('/homework', validateRequest(homeworkZodSchema), HomeworkController.createHomework);
homeworkRouter.get('/homework', HomeworkController.getAllHomework);
homeworkRouter.get('/homework/:id', HomeworkController.getSingleHomework);
homeworkRouter.patch('/homework/:id', HomeworkController.updateHomework);
homeworkRouter.delete('/homework/:id', HomeworkController.deleteHomework);

export default homeworkRouter;
