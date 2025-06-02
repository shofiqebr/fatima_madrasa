import mongoose, { Schema, model } from 'mongoose';
import { IResult } from './result.interface'; // Adjust the path as needed

const SubjectResultSchema = new Schema(
  {
    name: { type: String, required: true },
    fullMarks: { type: Number, required: true },
    obtainedMarks: { type: Number, required: true },
    grade: { type: String },
    gpa: { type: Number },
    comments: { type: String },
  },
  { _id: false } // prevent automatic _id for subdocuments
);

const ResultSchema = new Schema<IResult>(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    academicYear: { type: String, required: true },
    term: {
      type: String,
      enum: ['First Term', 'Mid Term', 'Final Term'],
      required: true,
    },
    class: { type: String, required: true },
    subjects: { type: [SubjectResultSchema], required: true },
    totalMarks: { type: Number },
    averageGPA: { type: Number },
    overallGrade: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Result = model<IResult>('Result', ResultSchema);
