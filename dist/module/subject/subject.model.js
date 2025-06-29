"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/modules/subject/subject.model.ts
const mongoose_1 = require("mongoose");
const subjectSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String },
    classId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Class', required: true },
}, { timestamps: true });
const SubjectModel = (0, mongoose_1.model)('Subject', subjectSchema);
exports.default = SubjectModel;
