import { z } from 'zod';

export const noticeZodSchema = z.object({
  body: z.object({
    title: z.string().min(5),
    description: z.string().min(10),
    date: z.string().datetime(),
    audience: z.enum(['All', 'Students', 'Teachers', 'Admins']),
    postedBy: z.string().min(1),
    isPublished: z.boolean().default(true),
  }),
});
