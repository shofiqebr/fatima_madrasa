import express from 'express';
import * as AttendanceController from './attendance.controller';

const attendanceRouter = express.Router();

attendanceRouter.post('/attendance', AttendanceController.createAttendance);
attendanceRouter.get('/attendance', AttendanceController.getAllAttendances);
attendanceRouter.get('/attendance/:id', AttendanceController.getSingleAttendance);
attendanceRouter.patch('/attendance/:id', AttendanceController.updateAttendance);
attendanceRouter.delete('/attendance/:id', AttendanceController.deleteAttendance);

export default attendanceRouter;