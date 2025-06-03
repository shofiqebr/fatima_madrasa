import Attendance from './attendance.model';
import { IAttendance } from './attendance.interface';

const createAttendance = async (payload: IAttendance) => {
  return await Attendance.create(payload);
};

const getAllAttendances = async () => {
  return await Attendance.find().populate('userId');
};

const getSingleAttendance = async (id: string) => {
  return await Attendance.findById(id).populate('userId');
};

const updateAttendance = async (id: string, payload: Partial<IAttendance>) => {
  return await Attendance.findByIdAndUpdate(id, payload, { new: true });
};

const deleteAttendance = async (id: string) => {
  return await Attendance.findByIdAndDelete(id);
};

export const AttendanceService = {
  createAttendance,
  getAllAttendances,
  getSingleAttendance,
  updateAttendance,
  deleteAttendance,
};