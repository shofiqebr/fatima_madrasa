import { IResult } from "./result.interface";
import { Result } from "./result.model";


export const createResultService = async (payload: IResult) => {
  return await Result.create(payload);
};

export const getAllResultsService = async () => {
  return await Result.find().populate('student');
};

export const getResultByIdService = async (id: string) => {
  return await Result.findById(id).populate('student');
};

export const updateResultService = async (id: string, payload: Partial<IResult>) => {
  return await Result.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteResultService = async (id: string) => {
  return await Result.findByIdAndDelete(id);
};

export const resultService = {
    createResultService,
    getAllResultsService,
    getResultByIdService,
    updateResultService,
    deleteResultService
}