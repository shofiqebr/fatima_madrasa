import { Schema, model } from 'mongoose';
import { INotice } from './notice.interface';

const noticeSchema = new Schema<INotice>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    audience: {
      type: String,
      enum: ['All', 'Students', 'Teachers', 'Admins'],
      required: true,
    },
    postedBy: { type: String, required: true },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const NoticeModel = model<INotice>('Notice', noticeSchema);
export default NoticeModel;
