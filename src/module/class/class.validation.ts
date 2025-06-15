import { z } from 'zod';

export const classZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Class name is required' }).min(1),
    description: z.string().optional(),
  }),
});
