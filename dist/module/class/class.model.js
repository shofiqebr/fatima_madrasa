"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const classSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
}, { timestamps: true });
const ClassModel = (0, mongoose_1.model)('Class', classSchema);
exports.default = ClassModel;
