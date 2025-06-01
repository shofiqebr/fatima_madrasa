"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const homeworkSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    classId: { type: String, required: true },
    subjectId: { type: String, required: true },
    dueDate: { type: String, required: true },
    assignedBy: { type: String, required: true },
    attachments: [{ type: String }],
}, { timestamps: true });
const HomeworkModel = (0, mongoose_1.model)('Homework', homeworkSchema);
exports.default = HomeworkModel;
