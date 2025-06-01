import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createResultZodSchema } from './result.validation';
import { resultController } from './result.controller';


const resultRouter = express.Router();

resultRouter.post('/result', validateRequest(createResultZodSchema), resultController.createResult);
resultRouter.get('/result', resultController.getAllResults);
resultRouter.get('/result/:id', resultController.getResultById);
resultRouter.patch('/result/:id', resultController.updateResult);
resultRouter.delete('/result/:id', resultController.deleteResult);

export default resultRouter;