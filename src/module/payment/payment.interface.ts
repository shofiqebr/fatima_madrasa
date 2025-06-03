
import { Types } from "mongoose";
import { PAYMENT_TYPE, STUDENT_PAYMENT_ITEM_TYPE, TEACHER_PAYMENT_ITEM_TYPE } from "./payment.constants";

export interface IPaymentItem {
  title: string;
  amount: number;
  studentItemType?: STUDENT_PAYMENT_ITEM_TYPE;
  teacherItemType?: TEACHER_PAYMENT_ITEM_TYPE;
  remarks?: string;
}

export interface IPayment {
  type: PAYMENT_TYPE;
  amount: number;
  date: string; // ISO
  method: "Cash" | "Bank" | "Online";

  student?: Types.ObjectId;
  teacher?: Types.ObjectId;

  items: IPaymentItem[];

  donationType?: string;
  donorName?: string;
  donorContact?: string;
  description?: string;
}
