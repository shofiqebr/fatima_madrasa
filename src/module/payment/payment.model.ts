// src/models/payment.model.ts
import { Schema, model, Types } from "mongoose";
import { PAYMENT_TYPE, STUDENT_PAYMENT_ITEM_TYPE, TEACHER_PAYMENT_ITEM_TYPE } from "./payment.constants";
import { IPayment } from "./payment.interface";


const paymentItemSchema = new Schema(
  {
    title: String,
    amount: Number,
    studentItemType: { type: String, enum: Object.values(STUDENT_PAYMENT_ITEM_TYPE), default: undefined },
    teacherItemType: { type: String, enum: Object.values(TEACHER_PAYMENT_ITEM_TYPE), default: undefined },
    remarks: String,
  },
  { _id: false }
);

const paymentSchema = new Schema<IPayment>(
  {
    type: { type: String, enum: Object.values(PAYMENT_TYPE), required: true },
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    method: { type: String, enum: ["Cash", "Bank", "Online"], required: true },

    student: { type: Types.ObjectId, ref: "Student" },
    teacher: { type: Types.ObjectId, ref: "Teacher" },

    items: [paymentItemSchema],

    donationType: String,
    donorName: String,
    donorContact: String,
    description: String,
  },
  { timestamps: true }
);

export const Payment = model<IPayment>("Payment", paymentSchema);
