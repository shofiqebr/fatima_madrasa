import ClassModel from './class.model';
import { IClass } from './class.interface';

export const ClassService = {
  createClass: async (payload: IClass) => {
    return await ClassModel.create(payload);
  },

  getAllClasses: async () => {
    return await ClassModel.find().sort({ createdAt: -1 });
  },

  getSingleClass: async (id: string) => {
    return await ClassModel.findById(id);
  },

  updateClass: async (id: string, payload: Partial<IClass>) => {
    return await ClassModel.findByIdAndUpdate(id, payload, { new: true });
  },

  deleteClass: async (id: string) => {
    return await ClassModel.findByIdAndDelete(id);
  },
};
