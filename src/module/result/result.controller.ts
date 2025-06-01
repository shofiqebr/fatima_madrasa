import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { resultService } from './result.service';
import sendResponse from '../../utils/sendResponse';


export const createResult = catchAsync(async (req: Request, res: Response) => {
  const result = await resultService.createResultService(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: 'Result created successfully',
    data: result,
  });
});

export const getAllResults = catchAsync(async (req: Request, res: Response) => {
  const results = await resultService.getAllResultsService();
  sendResponse(res, {
    statusCode: 200,
    message: 'Results retrieved successfully',
    data: results,
  });
});

export const getResultById = catchAsync(async (req: Request, res: Response) => {
  const result = await resultService.getResultByIdService(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Result retrieved successfully',
    data: result,
  });
});

export const updateResult = catchAsync(async (req: Request, res: Response) => {
  const result = await resultService.updateResultService(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    message: 'Result updated successfully',
    data: result,
  });
});

export const deleteResult = catchAsync(async (req: Request, res: Response) => {
  await resultService.deleteResultService(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    message: 'Result deleted successfully',
    data: null,
  });
});

export const resultController = {
    createResult,
    getAllResults,
    getResultById,
    updateResult,
    deleteResult
}