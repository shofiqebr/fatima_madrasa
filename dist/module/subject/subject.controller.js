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
exports.SubjectController = void 0;
const subject_service_1 = require("./subject.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
exports.SubjectController = {
    createSubject: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield subject_service_1.SubjectService.createSubject(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            message: 'Subject created successfully',
            data: result,
        });
    })),
    getAllSubjects: (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield subject_service_1.SubjectService.getAllSubjects();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Subjects fetched successfully',
            data: result,
        });
    })),
    getSingleSubject: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield subject_service_1.SubjectService.getSingleSubject(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Subject retrieved successfully',
            data: result,
        });
    })),
    updateSubject: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield subject_service_1.SubjectService.updateSubject(req.params.id, req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Subject updated successfully',
            data: result,
        });
    })),
    deleteSubject: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield subject_service_1.SubjectService.deleteSubject(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Subject deleted successfully',
            data: result,
        });
    })),
};
