// src/modules/teacher/teacher.validation.ts

import { z } from 'zod';

export const createTeacherZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    // id: z.string({ required_error: 'teacherId is required' }),
    phone: z.string({ required_error: 'Phone number is required' }),
    gender: z.enum(['Male', 'Female'], {
      required_error: 'Gender must be either Male or Female',
    }),
    dateOfBirth: z.string({ required_error: 'Date of Birth is required' }),
    joiningDate: z.string({ required_error: 'Joining Date is required' }),
    designation: z.string({ required_error: 'Designation is required' }),
    subjectSpecialization: z.string({ required_error: 'Subject Specialization is required' }),
    salary: z.number({ required_error: 'Salary is required' }),

    address: z.object({
      village: z.string({ required_error: 'Village is required' }),
      postOffice: z.string({ required_error: 'Post Office is required' }),
      upazila: z.string({ required_error: 'Upazila is required' }),
      district: z.string({ required_error: 'District is required' }),
    }),

    emergencyContact: z.string().optional(),
    bloodGroup: z.string().optional(),
    educationQualification: z.string().optional(),
    isActive: z.boolean({ required_error: 'Active status is required' }),
    comments: z.string().optional(),
  }),
});
