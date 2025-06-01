"use strict";
// src/modules/student/student.model.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const addressSchema = new mongoose_1.Schema({
    village: String,
    postOffice: String,
    upazila: String,
    district: String,
}, { _id: false });
const studentSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    academicYear: { type: String, required: true },
    class: { type: String, required: true },
    isNewAdmission: { type: Boolean, required: true },
    // studentId: { type: String, required: true, unique: true },
    admissionFormSerial: String,
    admissionFeeReceived: { type: Boolean, required: true },
    admissionFeeAmount: Number,
    permanentAddress: addressSchema,
    currentAddress: { type: String, required: true },
    isResidential: { type: Boolean, required: true },
    fullName: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female'], required: true },
    rollNumber: { type: String, required: true },
    fatherName: { type: String, required: true },
    phone: { type: String },
    motherName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    nidOrBirthCertNo: { type: String, required: true },
    nationality: { type: String, required: true },
    bloodGroup: String,
    smsConsent: { type: Boolean, required: true },
    guardianRelation: String,
    identificationMark: String,
    comments: String,
    financialStatus: {
        type: String,
        enum: ['Poor', 'MiddleClass', 'Rich', 'Orphan', 'Needy'],
        required: true,
    },
}, {
    timestamps: true,
});
exports.Student = (0, mongoose_1.model)('Student', studentSchema);
