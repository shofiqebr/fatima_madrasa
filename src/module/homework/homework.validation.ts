import { z } from 'zod';

export const homeworkZodSchema = z.object({
  body: z.object({
    title: z.string().min(3),
    description: z.string().min(5),
    classId: z.string().min(1).optional(),
    subjectId: z.string().min(1).optional(),
    dueDate: z.string().datetime(),
    assignedBy: z.string().min(1),
    attachments: z.array(z.string()).optional(),
  }),
});
