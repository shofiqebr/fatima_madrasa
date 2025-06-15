import { z } from 'zod';

export const subjectZodSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    code: z.string().min(1),
    description: z.string().optional(),
    classId: z.string().min(1),
  }),
});