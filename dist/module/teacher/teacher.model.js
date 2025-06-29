"use strict";
// src/modules/teacher/teacher.model.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const mongoose_1 = require("mongoose");
const teacherSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: { type: String, required: true },
    id: { type: String, required: true, unique: true },
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
}, { timestamps: true });
exports.Teacher = (0, mongoose_1.model)('Teacher', teacherSchema);
