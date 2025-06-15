import { Types } from 'mongoose';

export interface IAddress {
  village: string;
  postOffice: string;
  upazila: string;
  district: string;
}

export type TFinancialStatus = 'Poor' | 'MiddleClass' | 'Rich' | 'Orphan' | 'Needy';

export type TGender = 'Male' | 'Female';

export interface IStudent {
  user: Types.ObjectId; // Reference to the User model

  academicYear: string; // e.g., "2021-2022"
  class: string; // e.g., "Class 5"
  isNewAdmission: boolean;
  // studentId: string; // Institute-issued ID

  admissionFormSerial?: string;
  admissionFeeReceived: boolean;
  admissionFeeAmount?: number;

  permanentAddress: IAddress;
  currentAddress: string;
  isResidential: boolean; // আবাসিক/অনাবাসিক

  fullName: string;
  gender: TGender;
  rollNumber: string;

  fatherName: string;
  phone?: string;
  motherName: string;
  dateOfBirth: string; // ISO format preferred: YYYY-MM-DD

  nidOrBirthCertNo: string;
  nationality: string;
  bloodGroup?: string;

  smsConsent: boolean; // Whether SMS will be sent
  guardianRelation?: string; // সম্পর্ক
  identificationMark?: string; // সনাক্তকরন চিহ্ন
  comments?: string;

  financialStatus: TFinancialStatus; // অর্থনৈতিক অবস্থা
  isActive: boolean;

  // Optional metadata
  createdAt?: Date;
  updatedAt?: Date;
}

// Used during create operation
export type IStudentCreate = Omit<IStudent, 'user' | 'createdAt' | 'updatedAt'>;
