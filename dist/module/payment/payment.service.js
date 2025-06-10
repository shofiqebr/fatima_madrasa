"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const payment_model_1 = require("./payment.model");
exports.PaymentService = {
    createPayment: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        return yield payment_model_1.Payment.create(payload);
    }),
    getAllPayments: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield payment_model_1.Payment.find().populate('student teacher');
    }),
    getSinglePayment: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield payment_model_1.Payment.findById(id).populate('student teacher');
    }),
    updatePayment: (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return yield payment_model_1.Payment.findByIdAndUpdate(id, payload, { new: true });
    }),
    deletePayment: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield payment_model_1.Payment.findByIdAndDelete(id);
    }),
};
