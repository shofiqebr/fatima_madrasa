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
exports.deleteAttendance = exports.updateAttendance = exports.getSingleAttendance = exports.getAllAttendances = exports.createAttendance = void 0;
const attendance_service_1 = require("./attendance.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
exports.createAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.AttendanceService.createAttendance(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: 'Attendance created successfully',
        data: result,
    });
}));
exports.getAllAttendances = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.AttendanceService.getAllAttendances();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Attendances retrieved successfully',
        data: result,
    });
}));
exports.getSingleAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.AttendanceService.getSingleAttendance(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Attendance retrieved successfully',
        data: result,
    });
}));
exports.updateAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.AttendanceService.updateAttendance(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Attendance updated successfully',
        data: result,
    });
}));
exports.deleteAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield attendance_service_1.AttendanceService.deleteAttendance(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Attendance deleted successfully',
        data: result,
    });
}));
