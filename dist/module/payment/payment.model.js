"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
// src/models/payment.model.ts
const mongoose_1 = require("mongoose");
const payment_constants_1 = require("./payment.constants");
const paymentItemSchema = new mongoose_1.Schema({
    title: String,
    amount: Number,
    studentItemType: { type: String, enum: Object.values(payment_constants_1.STUDENT_PAYMENT_ITEM_TYPE), default: undefined },
    teacherItemType: { type: String, enum: Object.values(payment_constants_1.TEACHER_PAYMENT_ITEM_TYPE), default: undefined },
    remarks: String,
}, { _id: false });
const paymentSchema = new mongoose_1.Schema({
    type: { type: String, enum: Object.values(payment_constants_1.PAYMENT_TYPE), required: true },
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    method: { type: String, enum: ["Cash", "Bank", "Online"], required: true },
    student: { type: mongoose_1.Types.ObjectId, ref: "Student" },
    teacher: { type: mongoose_1.Types.ObjectId, ref: "Teacher" },
    items: [paymentItemSchema],
    donationType: String,
    donorName: String,
    donorContact: String,
    description: String,
}, { timestamps: true });
exports.Payment = (0, mongoose_1.model)("Payment", paymentSchema);
