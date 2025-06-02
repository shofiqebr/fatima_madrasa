import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { resultService } from './result.service';
import sendResponse from '../../utils/sendResponse';
import { IResult } from './result.interface';

// Create Result
const createResult = catchAsync(async (req: Request, res: Response) => {
  const result = await resultService.createResultService(req.body);

  sendResponse<IResult>(res, {
    statusCode: 201,
    message: 'Result created successfully',
    data: result,
  });
});


// Get All Results
const getAllResults = catchAsync(async (_req: Request, res: Response) => {
  const results = await resultService.getAllResultsService();

  sendResponse<IResult[]>(res, {
    statusCode: 200,
    message: 'Results retrieved successfully',
    data: results,
  });
});

// Get Result by ID
const getResultById = catchAsync(async (req: Request, res: Response) => {
  const result = await resultService.getResultByIdService(req.params.id);

  sendResponse<IResult>(res, {
    statusCode: 200,
    message: 'Result retrieved successfully',
    data: result,
  });
});

// Update Result
const updateResult = catchAsync(async (req: Request, res: Response) => {
  const updatedResult = await resultService.updateResultService(req.params.id, req.body);

  sendResponse<IResult>(res, {
    statusCode: 200,
    message: 'Result updated successfully',
    data: updatedResult,
  });
});

// Delete Result
const deleteResult = catchAsync(async (req: Request, res: Response) => {
  await resultService.deleteResultService(req.params.id);

  sendResponse<null>(res, {
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
  deleteResult,
};
