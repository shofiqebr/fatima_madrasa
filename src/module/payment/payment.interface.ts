
import { Types } from "mongoose";
import { DONATION_PAYMENT_ITEM_TYPE, PAYMENT_TYPE, STUDENT_PAYMENT_ITEM_TYPE, TEACHER_PAYMENT_ITEM_TYPE } from "./payment.constants";

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

export interface DonationPayment {
  id: string;
  donorName: string;
  amount: number;
  date: string;
  paymentType: PAYMENT_TYPE.DONATION;
  donationType: DONATION_PAYMENT_ITEM_TYPE;
  notes?: string;
}
