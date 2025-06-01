import HomeworkModel from './homework.model';
import { IHomework } from './homework.interface';

export const HomeworkService = {
  createHomework: async (payload: IHomework) => {
    return await HomeworkModel.create(payload);
  },

  getAllHomework: async () => {
    return await HomeworkModel.find().sort({ dueDate: -1 });
  },

  getSingleHomework: async (id: string) => {
    return await HomeworkModel.findById(id);
  },

  updateHomework: async (id: string, payload: Partial<IHomework>) => {
    return await HomeworkModel.findByIdAndUpdate(id, payload, { new: true });
  },

  deleteHomework: async (id: string) => {
    return await HomeworkModel.findByIdAndDelete(id);
  },
};
