import NoticeModel from './notice.model';
import { INotice } from './notice.interface';

export const NoticeService = {
  createNotice: async (payload: INotice) => {
    return await NoticeModel.create(payload);
  },

  getAllNotices: async () => {
    return await NoticeModel.find().sort({ date: -1 });
  },

  getSingleNotice: async (id: string) => {
    return await NoticeModel.findById(id);
  },

  updateNotice: async (id: string, payload: Partial<INotice>) => {
    return await NoticeModel.findByIdAndUpdate(id, payload, { new: true });
  },

  deleteNotice: async (id: string) => {
    return await NoticeModel.findByIdAndDelete(id);
  },
};
