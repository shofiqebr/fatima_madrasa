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
exports.TeacherController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const teacher_service_1 = require("./teacher.service");
exports.TeacherController = {
    createTeacher: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield teacher_service_1.TeacherService.createTeacher(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'Teacher created successfully',
            data: result,
        });
    })),
    getAllTeachers: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield teacher_service_1.TeacherService.getAllTeachers();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'All teachers retrieved successfully',
            data: result,
        });
    })),
    getSingleTeacher: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield teacher_service_1.TeacherService.getSingleTeacher(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Teacher retrieved successfully',
            data: result,
        });
    })),
    updateTeacher: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield teacher_service_1.TeacherService.updateTeacher(req.params.id, req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Teacher updated successfully',
            data: result,
        });
    })),
    deleteTeacher: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield teacher_service_1.TeacherService.deleteTeacher(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Teacher deleted successfully',
            data: result,
        });
    })),
};
