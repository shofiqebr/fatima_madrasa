"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const SubjectResultSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    fullMarks: { type: Number, required: true },
    obtainedMarks: { type: Number, required: true },
    grade: { type: String },
    gpa: { type: Number },
    comments: { type: String },
}, { _id: false } // prevent automatic _id for subdocuments
);
const ResultSchema = new mongoose_1.Schema({
    student: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Student', required: true },
    academicYear: { type: String, required: true },
    term: {
        type: String,
        enum: ['First Term', 'Mid Term', 'Final Term'],
        required: true,
    },
    class: { type: String, required: true },
    subjects: { type: [SubjectResultSchema], required: true },
    totalMarks: { type: Number },
    averageGPA: { type: Number },
    overallGrade: { type: String },
}, {
    timestamps: true,
});
exports.Result = (0, mongoose_1.model)('Result', ResultSchema);
