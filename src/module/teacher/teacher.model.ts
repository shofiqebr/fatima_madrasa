// src/modules/teacher/teacher.model.ts

import { Schema, model } from 'mongoose';
import { ITeacher } from './teacher.interface';


const teacherSchema = new Schema<ITeacher>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: { type: String, required: true },
    teacherId: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female'], required: true },
    dateOfBirth: { type: String, required: true },
    joiningDate: { type: String, required: true },
    designation: { type: String, required: true },
    subjectSpecialization: { type: String, required: true },
    salary: { type: Number, required: true },
    address: {
      village: { type: String, required: true },
      postOffice: { type: String, required: true },
      upazila: { type: String, required: true },
      district: { type: String, required: true },
    },
    emergencyContact: { type: String },
    bloodGroup: { type: String },
    educationQualification: { type: String },
    isActive: { type: Boolean, required: true },
    comments: { type: String },
  },
  { timestamps: true }
);

export const Teacher = model<ITeacher>('Teacher', teacherSchema);
