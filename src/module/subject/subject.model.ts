// src/modules/subject/subject.model.ts
import { Schema, model } from 'mongoose';
import { ISubject } from './subject.interface';

const subjectSchema = new Schema<ISubject>(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String },
    classId: { type: Schema.Types.ObjectId, ref: 'Class', required: true }, 
  },
  { timestamps: true }
);

const SubjectModel = model<ISubject>('Subject', subjectSchema);
export default SubjectModel;
