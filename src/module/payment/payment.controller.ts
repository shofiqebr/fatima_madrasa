import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PaymentService } from './payment.service';


export const PaymentController = {
  createPayment: catchAsync(async (req: Request, res: Response) => {
    const result = await PaymentService.createPayment(req.body);
    sendResponse(res, {
      statusCode: 201,
      message: 'Payment created successfully',
      data: result,
    });
  }),

  getAllPayments: catchAsync(async (req: Request, res: Response) => {
    const result = await PaymentService.getAllPayments();
    sendResponse(res, {
      statusCode: 200,
      message: 'Payments retrieved successfully',
      data: result,
    });
  }),

  getSinglePayment: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await PaymentService.getSinglePayment(id);
    sendResponse(res, {
      statusCode: 200,
      message: 'Payment retrieved successfully',
      data: result,
    });
  }),

  updatePayment: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await PaymentService.updatePayment(id, req.body);
    sendResponse(res, {
      statusCode: 200,
      message: 'Payment updated successfully',
      data: result,
    });
  }),

  deletePayment: catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await PaymentService.deletePayment(id);
    sendResponse(res, {
      statusCode: 200,
      message: 'Payment deleted successfully',
      data: result,
    });
  }),
};
