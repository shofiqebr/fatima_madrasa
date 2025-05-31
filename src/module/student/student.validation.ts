// src/modules/student/student.validation.ts

import { z } from 'zod';

export const createStudentWithUserZodSchema = z.object({
  body: z.object({
    user: z.object({
      name: z.string(),
      // email: z.string().email(),
      phone: z.string().optional(),
      // password is auto-generated, no need here
    }),
    academicYear: z.string(),
    class: z.string(),
    isNewAdmission: z.boolean(),
    studentId: z.string(),
    admissionFeeReceived: z.boolean(),
    permanentAddress: z.object({
      village: z.string(),
      postOffice: z.string(),
      upazila: z.string(),
      district: z.string(),
    }),
    currentAddress: z.string(),
    isResidential: z.boolean(),
    fullName: z.string(),
    gender: z.enum(['Male', 'Female']),
    rollNumber: z.string(),
    fatherName: z.string(),
    motherName: z.string(),
    dateOfBirth: z.string(),
    nidOrBirthCertNo: z.string(),
    nationality: z.string(),
    smsConsent: z.boolean(),
    financialStatus: z.enum(['Poor', 'MiddleClass', 'Rich', 'Orphan', 'Needy']),
    bloodGroup: z.string().optional(),
    admissionFormSerial: z.string().optional(),
    admissionFeeAmount: z.number().optional(),
    guardianRelation: z.string().optional(),
    identificationMark: z.string().optional(),
    comments: z.string().optional(),
  }),
});
