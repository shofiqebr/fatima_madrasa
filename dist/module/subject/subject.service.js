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
exports.SubjectService = void 0;
const subject_model_1 = __importDefault(require("./subject.model"));
exports.SubjectService = {
    createSubject: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        return yield subject_model_1.default.create(payload);
    }),
    getAllSubjects: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield subject_model_1.default.find().populate('classId').sort({ createdAt: -1 });
    }),
    getSingleSubject: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield subject_model_1.default.findById(id).populate('classId');
    }),
    updateSubject: (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return yield subject_model_1.default.findByIdAndUpdate(id, payload, { new: true });
    }),
    deleteSubject: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield subject_model_1.default.findByIdAndDelete(id);
    }),
};
