import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createPaymentZodSchema } from './payment.validation';
import { PaymentController } from './payment.controller';


const paymentRouter = express.Router();

paymentRouter.post('/payment', validateRequest(createPaymentZodSchema), PaymentController.createPayment);
paymentRouter.get('/payment', PaymentController.getAllPayments);
paymentRouter.get('/payment/:id', PaymentController.getSinglePayment);
paymentRouter.patch('/payment/:id', PaymentController.updatePayment);
paymentRouter.delete('/payment/:id', PaymentController.deletePayment);

export default paymentRouter;