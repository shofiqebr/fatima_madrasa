// src/interfaces/teacher.interface.ts

import { Types } from 'mongoose';

export type TGender = 'Male' | 'Female';

export interface ITeacher {
  user: Types.ObjectId; // Reference to User

  name: string;
  email: string;
  phone: string;
  gender: TGender;
  dateOfBirth: string; // e.g. '1990-05-12'
  joiningDate: string; // e.g. '2022-01-10'
  designation: string;
  subjectSpecialization: string;
  salary: number;
  address: {
    village: string;
    postOffice: string;
    upazila: string;
    district: string;
  };
  emergencyContact?: string;
  bloodGroup?: string;
  educationQualification?: string;
  isActive: boolean;
  comments?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

// Used when creating teacher (user will be created automatically)
export type ITeacherCreate = Omit<ITeacher, 'user' | 'createdAt' | 'updatedAt'>;
