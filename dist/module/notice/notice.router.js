"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const notice_validation_1 = require("./notice.validation");
const notice_controller_1 = require("./notice.controller");
const noticeRouter = express_1.default.Router();
noticeRouter.post('/notice', (0, validateRequest_1.default)(notice_validation_1.noticeZodSchema), notice_controller_1.NoticeController.createNotice);
noticeRouter.get('/notice', notice_controller_1.NoticeController.getAllNotices);
noticeRouter.get('/notice/:id', notice_controller_1.NoticeController.getSingleNotice);
noticeRouter.patch('/notice/:id', notice_controller_1.NoticeController.updateNotice);
noticeRouter.delete('/notice/:id', notice_controller_1.NoticeController.deleteNotice);
exports.default = noticeRouter;
