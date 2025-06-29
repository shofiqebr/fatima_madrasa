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
exports.authService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../user/user.model");
const config_1 = __importDefault(require("../../app/config"));
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.UserModel.findOne({ id: payload === null || payload === void 0 ? void 0 : payload.id }).select('+password');
    if (!user) {
        throw new Error('User not found!');
    }
    const isPasswordMatched = yield bcrypt_1.default.compare(payload === null || payload === void 0 ? void 0 : payload.password, user === null || user === void 0 ? void 0 : user.password);
    if (!isPasswordMatched) {
        throw new Error('Incorrect password!');
    }
    const jwtPayload = {
        _id: user._id,
        id: user.id,
        role: user.role,
    };
    const token = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt.access_secret, {
        expiresIn: '15d',
    });
    return {
        token,
        user: {
            _id: user._id,
            name: user.name,
            id: user.id,
            role: user.role,
        },
    };
});
exports.authService = {
    login,
};
