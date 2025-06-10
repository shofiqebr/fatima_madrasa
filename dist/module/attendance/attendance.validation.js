"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceValidationSchema = void 0;
const zod_1 = require("zod");
exports.attendanceValidationSchema = zod_1.z.object({
    date: zod_1.z.string(),
    userId: zod_1.z.string(),
    role: zod_1.z.enum(['Student', 'Teacher']),
    status: zod_1.z.enum(['Present', 'Absent', 'Late', 'Leave']),
    recordedBy: zod_1.z.string(),
    source: zod_1.z.enum(['Manual', 'Device']),
});
