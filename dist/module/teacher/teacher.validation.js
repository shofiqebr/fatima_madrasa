"use strict";
// src/modules/teacher/teacher.validation.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTeacherZodSchema = void 0;
const zod_1 = require("zod");
exports.createTeacherZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        // id: z.string({ required_error: 'teacherId is required' }),
        phone: zod_1.z.string({ required_error: 'Phone number is required' }),
        gender: zod_1.z.enum(['Male', 'Female'], {
            required_error: 'Gender must be either Male or Female',
        }),
        dateOfBirth: zod_1.z.string({ required_error: 'Date of Birth is required' }),
        joiningDate: zod_1.z.string({ required_error: 'Joining Date is required' }),
        designation: zod_1.z.string({ required_error: 'Designation is required' }),
        subjectSpecialization: zod_1.z.string({ required_error: 'Subject Specialization is required' }),
        salary: zod_1.z.number({ required_error: 'Salary is required' }),
        address: zod_1.z.object({
            village: zod_1.z.string({ required_error: 'Village is required' }),
            postOffice: zod_1.z.string({ required_error: 'Post Office is required' }),
            upazila: zod_1.z.string({ required_error: 'Upazila is required' }),
            district: zod_1.z.string({ required_error: 'District is required' }),
        }),
        emergencyContact: zod_1.z.string().optional(),
        bloodGroup: zod_1.z.string().optional(),
        educationQualification: zod_1.z.string().optional(),
        isActive: zod_1.z.boolean({ required_error: 'Active status is required' }),
        comments: zod_1.z.string().optional(),
    }),
});
