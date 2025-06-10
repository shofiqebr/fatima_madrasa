"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const attendanceSchema = new mongoose_1.Schema({
    date: { type: String, required: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    role: { type: String, enum: ['Student', 'Teacher'], required: true },
    status: { type: String, enum: ['Present', 'Absent', 'Late', 'Leave'], required: true },
    recordedBy: { type: String, required: true },
    source: { type: String, enum: ['Manual', 'Device'], required: true },
});
const Attendance = (0, mongoose_1.model)('Attendance', attendanceSchema);
exports.default = Attendance;
