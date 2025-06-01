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
exports.NoticeController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const notice_service_1 = require("./notice.service");
exports.NoticeController = {
    createNotice: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield notice_service_1.NoticeService.createNotice(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'Notice created successfully',
            data: result,
        });
    })),
    getAllNotices: (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield notice_service_1.NoticeService.getAllNotices();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Notices fetched successfully',
            data: result,
        });
    })),
    getSingleNotice: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield notice_service_1.NoticeService.getSingleNotice(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Notice retrieved successfully',
            data: result,
        });
    })),
    updateNotice: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield notice_service_1.NoticeService.updateNotice(req.params.id, req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Notice updated successfully',
            data: result,
        });
    })),
    deleteNotice: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield notice_service_1.NoticeService.deleteNotice(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Notice deleted successfully',
            data: result,
        });
    })),
};
