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
exports.NoticeService = void 0;
const notice_model_1 = __importDefault(require("./notice.model"));
exports.NoticeService = {
    createNotice: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        return yield notice_model_1.default.create(payload);
    }),
    getAllNotices: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield notice_model_1.default.find().sort({ date: -1 });
    }),
    getSingleNotice: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield notice_model_1.default.findById(id);
    }),
    updateNotice: (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return yield notice_model_1.default.findByIdAndUpdate(id, payload, { new: true });
    }),
    deleteNotice: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield notice_model_1.default.findByIdAndDelete(id);
    }),
};
