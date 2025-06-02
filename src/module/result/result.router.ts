import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { resultController } from './result.controller';
import { createResultSchema } from './result.validation';



const resultRouter = express.Router();

resultRouter.post('/result', validateRequest(createResultSchema), resultController.createResult);
resultRouter.get('/result', resultController.getAllResults);
resultRouter.get('/result/:id', resultController.getResultById);
resultRouter.patch('/result/:id', resultController.updateResult);
resultRouter.delete('/result/:id', resultController.deleteResult);

export default resultRouter;