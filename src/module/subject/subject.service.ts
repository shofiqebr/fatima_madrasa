
import { ISubject } from './subject.interface';
import SubjectModel from './subject.model';

export const SubjectService = {
  createSubject: async (payload: ISubject) => {
    return await SubjectModel.create(payload);
  },

  getAllSubjects: async () => {
    return await SubjectModel.find().populate('classId').sort({ createdAt: -1 });
  },

  getSingleSubject: async (id: string) => {
    return await SubjectModel.findById(id).populate('classId');
  },

  updateSubject: async (id: string, payload: Partial<ISubject>) => {
    return await SubjectModel.findByIdAndUpdate(id, payload, { new: true });
  },

  deleteSubject: async (id: string) => {
    return await SubjectModel.findByIdAndDelete(id);
  },
};