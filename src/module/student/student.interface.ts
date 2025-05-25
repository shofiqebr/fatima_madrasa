export interface IStudent {
  academicYear: string; // e.g., "2021-2022"
  class: string;        // e.g., "Class 8", "Dakhil 1st Year"
  isNewAdmission: boolean;
  studentId: string;

  admissionFormSerial?: string;
  admissionFeeReceived: boolean;
  admissionFeeAmount?: number;

  permanentAddress: {
    village: string;
    postOffice: string;
    upazila: string;
    district: string;
  };

  currentAddress: string;
  isResidential: boolean; // আবাসিক / অনাবাসিক

  fullName: string;
  gender: 'Male' | 'Female';
  rollNumber: string;

  fatherName: string;
  motherName: string;
  dateOfBirth: string; // ISO format

  nidOrBirthCertNo: string;
  nationality: string;
  bloodGroup?: string;

  smsConsent: boolean; // এস.এম.এস যাবে

  guardianRelation?: string;
  identificationMark?: string;
  comments?: string;

  financialStatus: 'Poor' | 'MiddleClass' | 'Rich' | 'Orphan' | 'Needy';
}
