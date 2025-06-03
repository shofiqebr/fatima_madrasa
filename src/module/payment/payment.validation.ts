import { z } from 'zod';
import { PAYMENT_TYPE, STUDENT_PAYMENT_ITEM_TYPE, TEACHER_PAYMENT_ITEM_TYPE } from './payment.constants';


export const paymentItemZodSchema = z.object({
  title: z.string(),
  amount: z.number(),
  studentItemType: z.nativeEnum(STUDENT_PAYMENT_ITEM_TYPE).optional(),
  teacherItemType: z.nativeEnum(TEACHER_PAYMENT_ITEM_TYPE).optional(),
  remarks: z.string().optional(),
});

export const createPaymentZodSchema = z.object({
  body: z.object({
    type: z.nativeEnum(PAYMENT_TYPE),
    amount: z.number(),
    date: z.string(),
    method: z.enum(['Cash', 'Bank', 'Online']),
    student: z.string().optional(),
    teacher: z.string().optional(),
    items: z.array(paymentItemZodSchema),
    donationType: z.string().optional(),
    donorName: z.string().optional(),
    donorContact: z.string().optional(),
    description: z.string().optional(),
  })
});