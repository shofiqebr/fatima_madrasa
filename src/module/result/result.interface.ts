import { Types } from 'mongoose';

export interface ISubjectResult {
  name: string;
  fullMarks: number;
  obtainedMarks: number;
  grade?: string;
  gpa?: number;
  comments?: string;
}

export interface IResult {
  student: Types.ObjectId | string; // ObjectId from MongoDB or string for flexibility
  academicYear: string;             // e.g., "2024-2025"
  term: 'First Term' | 'Mid Term' | 'Final Term';
  class: string;                    // e.g., "Class 8", "Dakhil 1st Year"

  subjects: ISubjectResult[];

  totalMarks?: number;
  averageGPA?: number;
  overallGrade?: string;

  createdAt?: Date;
  updatedAt?: Date;
}
