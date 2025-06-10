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
exports.resultController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const result_service_1 = require("./result.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Create Result
const createResult = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield result_service_1.resultService.createResultService(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: 'Result created successfully',
        data: result,
    });
}));
// Get All Results
const getAllResults = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield result_service_1.resultService.getAllResultsService();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Results retrieved successfully',
        data: results,
    });
}));
// Get Result by ID
const getResultById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield result_service_1.resultService.getResultByIdService(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Result retrieved successfully',
        data: result,
    });
}));
// Update Result
const updateResult = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedResult = yield result_service_1.resultService.updateResultService(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Result updated successfully',
        data: updatedResult,
    });
}));
// Delete Result
const deleteResult = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield result_service_1.resultService.deleteResultService(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: 'Result deleted successfully',
        data: null,
    });
}));
exports.resultController = {
    createResult,
    getAllResults,
    getResultById,
    updateResult,
    deleteResult,
};
