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
exports.ClassController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const class_service_1 = require("./class.service");
exports.ClassController = {
    createClass: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield class_service_1.ClassService.createClass(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'Class created successfully',
            data: result,
        });
    })),
    getAllClasses: (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield class_service_1.ClassService.getAllClasses();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Classes fetched successfully',
            data: result,
        });
    })),
    getSingleClass: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield class_service_1.ClassService.getSingleClass(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Class retrieved successfully',
            data: result,
        });
    })),
    updateClass: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield class_service_1.ClassService.updateClass(req.params.id, req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Class updated successfully',
            data: result,
        });
    })),
    deleteClass: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield class_service_1.ClassService.deleteClass(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Class deleted successfully',
            data: result,
        });
    })),
};
