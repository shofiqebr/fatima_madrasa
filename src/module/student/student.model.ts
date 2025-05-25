import { Schema, model } from 'mongoose';
import { IStudent } from './student.interface';

const addressSchema = new Schema({
  village: String,
  postOffice: String,
  upazila: String,
  district: String,
});

const studentSchema = new Schema<IStudent>({
  academicYear: { type: String, required: true },
  class: { type: String, required: true },
  isNewAdmission: { type: Boolean, required: true },
  studentId: { type: String, required: true, unique: true },

  admissionFormSerial: String,
  admissionFeeReceived: { type: Boolean, default: false },
  admissionFeeAmount: Number,

  permanentAddress: addressSchema,
  currentAddress: String,
  isResidential: { type: Boolean },

  fullName: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  rollNumber: String,

  fatherName: String,
  motherName: String,
  dateOfBirth: String,

  nidOrBirthCertNo: String,
  nationality: String,
  bloodGroup: String,

  smsConsent: { type: Boolean, default: false },

  guardianRelation: String,
  identificationMark: String,
  comments: String,

  financialStatus: {
    type: String,
    enum: ['Poor', 'MiddleClass', 'Rich', 'Orphan', 'Needy'],
  },
});

export const StudentModel = model<IStudent>('Student', studentSchema);
