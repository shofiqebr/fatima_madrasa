import { Schema, model } from 'mongoose';
import { IHomework } from './homework.interface';

const homeworkSchema = new Schema<IHomework>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    classId: { type: Schema.Types.ObjectId, ref: 'Class', required: true },
    subjectId: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
    dueDate: { type: String, required: true },
    assignedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    attachments: [{ type: String }],
  },
  { timestamps: true },
);

const HomeworkModel = model<IHomework>('Homework', homeworkSchema);
export default HomeworkModel;
