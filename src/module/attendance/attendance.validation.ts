import { z } from 'zod';

export const attendanceValidationSchema = z.object({
  date: z.string(),
  userId: z.string(),
  role: z.enum(['Student', 'Teacher']),
  status: z.enum(['Present', 'Absent', 'Late', 'Leave']),
  recordedBy: z.string(),
  source: z.enum(['Manual', 'Device']),
});