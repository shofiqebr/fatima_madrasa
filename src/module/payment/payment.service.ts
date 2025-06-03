import { IPayment } from "./payment.interface";
import { Payment } from "./payment.model";


export const PaymentService = {
  createPayment: async (payload: IPayment) => {
    return await Payment.create(payload);
  },

  getAllPayments: async () => {
    return await Payment.find().populate('student teacher');
  },

  getSinglePayment: async (id: string) => {
    return await Payment.findById(id).populate('student teacher');
  },

  updatePayment: async (id: string, payload: Partial<IPayment>) => {
    return await Payment.findByIdAndUpdate(id, payload, { new: true });
  },

  deletePayment: async (id: string) => {
    return await Payment.findByIdAndDelete(id);
  },
};
