import { z } from 'zod';

export const createResultZodSchema = z.object({
  student: z.string({ required_error: 'Student ID is required' }),
  academicYear: z.string({ required_error: 'Required' }),
  term: z.enum(['First Term', 'Mid Term', 'Final Term'], { required_error: 'Required' }),
  class: z.string({ required_error: 'Required' }),
  subjects: z.array(z.object({
    name: z.string(),
    fullMarks: z.number(),
    obtainedMarks: z.number(),
    grade: z.string().optional(),
    gpa: z.number().optional(),
    comments: z.string().optional()
  }))
});

