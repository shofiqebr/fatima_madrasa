import { Types } from "mongoose";

export interface IAttendance {
  date: string; // ISO format
  userId: Types.ObjectId | string; // Refers to student or teacher (User._id)
  role: 'Student' | 'Teacher';
  status: 'Present' | 'Absent' | 'Late' | 'Leave';
  recordedBy: string; // Admin user ID or system
  source: 'Manual' | 'Device';
}