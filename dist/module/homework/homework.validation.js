"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeworkZodSchema = void 0;
const zod_1 = require("zod");
exports.homeworkZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(3),
        description: zod_1.z.string().min(5),
        classId: zod_1.z.string().min(1).optional(),
        subjectId: zod_1.z.string().min(1).optional(),
        dueDate: zod_1.z.string().datetime(),
        assignedBy: zod_1.z.string().min(1),
        attachments: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
