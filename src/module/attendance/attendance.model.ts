import { Schema, model } from 'mongoose';
import { IAttendance } from './attendance.interface';

const attendanceSchema = new Schema<IAttendance>({
  date: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, enum: ['Student', 'Teacher'], required: true },
  status: { type: String, enum: ['Present', 'Absent', 'Late', 'Leave'], required: true },
  recordedBy: { type: String, required: true },
  source: { type: String, enum: ['Manual', 'Device'], required: true },
});

const Attendance = model<IAttendance>('Attendance', attendanceSchema);
export default Attendance;

