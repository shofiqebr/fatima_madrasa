// src/modules/student/student.model.ts

import { Schema, model } from 'mongoose';
import { IStudent } from './student.interface';

const addressSchema = new Schema(
  {
    village: String,
    postOffice: String,
    upazila: String,
    district: String,
  },
  { _id: false }
);

const studentSchema = new Schema<IStudent>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
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
    id: { type: String, required: true },

    fatherName: { type: String, required: true },
    phone: { type: String},
    motherName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },

    nidOrBirthCertNo: { type: String, required: true },
    nationality: { type: String, required: true },
    bloodGroup: String,

    smsConsent: { type: Boolean, required: true },
     isActive: { type: Boolean, default: true },

    guardianRelation: String,
    identificationMark: String,
    comments: String,

    financialStatus: {
      type: String,
      enum: ['Poor', 'MiddleClass', 'Rich', 'Orphan', 'Needy'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = model<IStudent>('Student', studentSchema);
