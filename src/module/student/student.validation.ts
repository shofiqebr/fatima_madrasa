import { z } from 'zod';

export const createStudentZodSchema = z.object({
  body: z.object({
    academicYear: z.string().min(4, 'Academic year is required'), // e.g., "2021-2022"
    class: z.string().min(1, 'Class is required'),
    isNewAdmission: z.boolean(),
    studentId: z.string().min(1, 'Student ID is required'),

    admissionFormSerial: z.string().optional(),
    admissionFeeReceived: z.boolean(),
    admissionFeeAmount: z.number().optional(),

    permanentAddress: z.object({
      village: z.string(),
      postOffice: z.string(),
      upazila: z.string(),
      district: z.string(),
    }),

    currentAddress: z.string().min(1, 'Current address is required'),
    isResidential: z.boolean(),

    fullName: z.string().min(1, 'Full name is required'),
    gender: z.enum(['Male', 'Female']),
    rollNumber: z.string().optional(),

    fatherName: z.string().min(1, 'Father name is required'),
    motherName: z.string().min(1, 'Mother name is required'),
    dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: 'Invalid date format',
    }),

    nidOrBirthCertNo: z.string().min(1, 'NID or Birth Cert No is required'),
    nationality: z.string().min(1, 'Nationality is required'),
    bloodGroup: z.string().optional(),

    smsConsent: z.boolean(),

    guardianRelation: z.string().optional(),
    identificationMark: z.string().optional(),
    comments: z.string().optional(),

    financialStatus: z.enum(['Poor', 'MiddleClass', 'Rich', 'Orphan', 'Needy']),
  }),
});
