"use strict";
// src/modules/student/student.validation.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudentWithUserZodSchema = void 0;
const zod_1 = require("zod");
exports.createStudentWithUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z.object({
            name: zod_1.z.string(),
            // email: z.string().email(),
            phone: zod_1.z.string().optional(),
            // password is auto-generated, no need here
        }),
        academicYear: zod_1.z.string(),
        class: zod_1.z.string(),
        isNewAdmission: zod_1.z.boolean(),
        // studentId: z.string(),
        admissionFeeReceived: zod_1.z.boolean(),
        permanentAddress: zod_1.z.object({
            village: zod_1.z.string(),
            postOffice: zod_1.z.string(),
            upazila: zod_1.z.string(),
            district: zod_1.z.string(),
        }),
        currentAddress: zod_1.z.string(),
        isResidential: zod_1.z.boolean(),
        fullName: zod_1.z.string(),
        gender: zod_1.z.enum(['Male', 'Female']),
        rollNumber: zod_1.z.string(),
        fatherName: zod_1.z.string(),
        motherName: zod_1.z.string(),
        dateOfBirth: zod_1.z.string(),
        nidOrBirthCertNo: zod_1.z.string(),
        nationality: zod_1.z.string(),
        smsConsent: zod_1.z.boolean(),
        financialStatus: zod_1.z.enum(['Poor', 'MiddleClass', 'Rich', 'Orphan', 'Needy']),
        bloodGroup: zod_1.z.string().optional(),
        admissionFormSerial: zod_1.z.string().optional(),
        admissionFeeAmount: zod_1.z.number().optional(),
        guardianRelation: zod_1.z.string().optional(),
        identificationMark: zod_1.z.string().optional(),
        comments: zod_1.z.string().optional(),
    }),
});
