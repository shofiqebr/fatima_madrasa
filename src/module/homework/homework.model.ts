import { Schema, model } from 'mongoose';
import { IHomework } from './homework.interface';

const homeworkSchema = new Schema<IHomework>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    classId: { type: String, required: true },
    subjectId: { type: String, required: true },
    dueDate: { type: String, required: true },
    assignedBy: { type: String, required: true },
    attachments: [{ type: String }],
  },
  { timestamps: true },
);

const HomeworkModel = model<IHomework>('Homework', homeworkSchema);
export default HomeworkModel;
