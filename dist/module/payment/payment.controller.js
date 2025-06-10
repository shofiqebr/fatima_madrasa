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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const payment_service_1 = require("./payment.service");
exports.PaymentController = {
    createPayment: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield payment_service_1.PaymentService.createPayment(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'Payment created successfully',
            data: result,
        });
    })),
    getAllPayments: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield payment_service_1.PaymentService.getAllPayments();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Payments retrieved successfully',
            data: result,
        });
    })),
    getSinglePayment: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const result = yield payment_service_1.PaymentService.getSinglePayment(id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Payment retrieved successfully',
            data: result,
        });
    })),
    updatePayment: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const result = yield payment_service_1.PaymentService.updatePayment(id, req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Payment updated successfully',
            data: result,
        });
    })),
    deletePayment: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const result = yield payment_service_1.PaymentService.deletePayment(id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Payment deleted successfully',
            data: result,
        });
    })),
};
