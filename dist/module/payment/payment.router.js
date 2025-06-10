"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const payment_validation_1 = require("./payment.validation");
const payment_controller_1 = require("./payment.controller");
const paymentRouter = express_1.default.Router();
paymentRouter.post('/payment', (0, validateRequest_1.default)(payment_validation_1.createPaymentZodSchema), payment_controller_1.PaymentController.createPayment);
paymentRouter.get('/payment', payment_controller_1.PaymentController.getAllPayments);
paymentRouter.get('/payment/:id', payment_controller_1.PaymentController.getSinglePayment);
paymentRouter.patch('/payment/:id', payment_controller_1.PaymentController.updatePayment);
paymentRouter.delete('/payment/:id', payment_controller_1.PaymentController.deletePayment);
exports.default = paymentRouter;
