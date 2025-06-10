"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResultSchema = void 0;
// result.validator.ts
const zod_1 = require("zod");
const subjectSchema = zod_1.z.object({
    name: zod_1.z.string(),
    fullMarks: zod_1.z.number(),
    obtainedMarks: zod_1.z.number(),
    grade: zod_1.z.string().optional(),
    gpa: zod_1.z.number().optional()
});
// export const createResultSchema = z.object({
//   student: z.string().min(1, "Student ID is required"),
//   academicYear: z.string().min(1, "Academic year is required"),
//   term: z.enum(["First Term", "Mid Term", "Final Term"]),
//   class: z.string().min(1, "Class is required"),
//   subjects: z.array(subjectSchema).min(1, "At least one subject required")
// });
//should be change 
exports.createResultSchema = zod_1.z
    .object({
    student: zod_1.z.string().optional(),
    academicYear: zod_1.z.string().optional(),
    term: zod_1.z.enum(["First Term", "Mid Term", "Final Term"]).optional(),
    class: zod_1.z.string().optional(),
    subjects: zod_1.z.array(subjectSchema).optional()
})
    .passthrough(); // Optional: to allow other fields too
