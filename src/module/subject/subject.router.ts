import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SubjectController } from './subject.controller';
import { subjectZodSchema } from './subject.validation';

const subjectRouter = express.Router();

subjectRouter.post('/subject', validateRequest(subjectZodSchema), SubjectController.createSubject);
subjectRouter.get('/subject', SubjectController.getAllSubjects);
subjectRouter.get('/subject/:id', SubjectController.getSingleSubject);
subjectRouter.patch('/subject/:id', SubjectController.updateSubject);
subjectRouter.delete('/subject/:id', SubjectController.deleteSubject);

export default subjectRouter;