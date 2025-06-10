"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentZodSchema = exports.paymentItemZodSchema = void 0;
const zod_1 = require("zod");
const payment_constants_1 = require("./payment.constants");
exports.paymentItemZodSchema = zod_1.z.object({
    title: zod_1.z.string(),
    amount: zod_1.z.number(),
    studentItemType: zod_1.z.nativeEnum(payment_constants_1.STUDENT_PAYMENT_ITEM_TYPE).optional(),
    teacherItemType: zod_1.z.nativeEnum(payment_constants_1.TEACHER_PAYMENT_ITEM_TYPE).optional(),
    remarks: zod_1.z.string().optional(),
});
exports.createPaymentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        type: zod_1.z.nativeEnum(payment_constants_1.PAYMENT_TYPE),
        amount: zod_1.z.number(),
        date: zod_1.z.string(),
        method: zod_1.z.enum(['Cash', 'Bank', 'Online']),
        student: zod_1.z.string().optional(),
        teacher: zod_1.z.string().optional(),
        items: zod_1.z.array(exports.paymentItemZodSchema),
        donationType: zod_1.z.string().optional(),
        donorName: zod_1.z.string().optional(),
        donorContact: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
    })
});
