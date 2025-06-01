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
exports.HomeworkController = void 0;
const homework_service_1 = require("./homework.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
exports.HomeworkController = {
    createHomework: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield homework_service_1.HomeworkService.createHomework(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'Homework created successfully',
            data: result,
        });
    })),
    getAllHomework: (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield homework_service_1.HomeworkService.getAllHomework();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Homework list retrieved',
            data: result,
        });
    })),
    getSingleHomework: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield homework_service_1.HomeworkService.getSingleHomework(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Single homework retrieved',
            data: result,
        });
    })),
    updateHomework: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield homework_service_1.HomeworkService.updateHomework(req.params.id, req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Homework updated successfully',
            data: result,
        });
    })),
    deleteHomework: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield homework_service_1.HomeworkService.deleteHomework(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Homework deleted',
            data: result,
        });
    })),
};
