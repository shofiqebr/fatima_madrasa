"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const noticeSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    audience: {
        type: String,
        enum: ['All', 'Students', 'Teachers', 'Admins'],
        required: true,
    },
    postedBy: { type: String, required: true },
    isPublished: { type: Boolean, default: true },
}, {
    timestamps: true,
});
const NoticeModel = (0, mongoose_1.model)('Notice', noticeSchema);
exports.default = NoticeModel;
