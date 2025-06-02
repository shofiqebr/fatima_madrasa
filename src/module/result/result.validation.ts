// result.validator.ts
import { z } from 'zod';

const subjectSchema = z.object({
  name: z.string(),
  fullMarks: z.number(),
  obtainedMarks: z.number(),
  grade: z.string().optional(),
  gpa: z.number().optional()
});

// export const createResultSchema = z.object({
//   student: z.string().min(1, "Student ID is required"),
//   academicYear: z.string().min(1, "Academic year is required"),
//   term: z.enum(["First Term", "Mid Term", "Final Term"]),
//   class: z.string().min(1, "Class is required"),
//   subjects: z.array(subjectSchema).min(1, "At least one subject required")
// });


//should be change 
export const createResultSchema = z
  .object({
    student: z.string().optional(),
    academicYear: z.string().optional(),
    term: z.enum(["First Term", "Mid Term", "Final Term"]).optional(),
    class: z.string().optional(),
    subjects: z.array(subjectSchema).optional()
  })
  .passthrough(); // Optional: to allow other fields too

