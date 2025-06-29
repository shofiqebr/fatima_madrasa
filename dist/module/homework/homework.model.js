"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const homeworkSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    classId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Class', required: true },
    subjectId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Subject', required: true },
    dueDate: { type: String, required: true },
    assignedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    attachments: [{ type: String }],
}, { timestamps: true });
const HomeworkModel = (0, mongoose_1.model)('Homework', homeworkSchema);
exports.default = HomeworkModel;
