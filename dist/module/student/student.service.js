"use strict";
// src/modules/student/student.service.ts
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
exports.deleteStudent = exports.updateStudent = exports.getSingleStudent = exports.getAllStudents = exports.createStudent = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const student_model_1 = require("./student.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../app/config"));
const user_constrants_1 = require("../user/user.constrants");
const user_model_1 = require("../user/user.model");
// src/modules/student/student.service.ts
const createStudent = (userPayload, studentPayload) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const defaultPassword = 'student123';
        const hashedPassword = yield bcrypt_1.default.hash(defaultPassword, Number(config_1.default.bcrypt_salt_rounds));
        const finalUserPayload = Object.assign(Object.assign({}, userPayload), { password: hashedPassword, role: user_constrants_1.USER_ROLE.STUDENT, createdAt: new Date(), updatedAt: new Date() });
        const [newUser] = yield user_model_1.UserModel.create([finalUserPayload], { session });
        const [newStudent] = yield student_model_1.Student.create([Object.assign(Object.assign({}, studentPayload), { user: newUser._id })], { session });
        yield session.commitTransaction();
        session.endSession();
        return newStudent;
    }
    catch (error) {
        yield session.abortTransaction();
        session.endSession();
        throw error;
    }
});
exports.createStudent = createStudent;
const getAllStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.Student.find().populate('user');
});
exports.getAllStudents = getAllStudents;
const getSingleStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.Student.findById(id).populate('user');
});
exports.getSingleStudent = getSingleStudent;
const updateStudent = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.Student.findByIdAndUpdate(id, payload, { new: true });
});
exports.updateStudent = updateStudent;
const deleteStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.Student.findByIdAndDelete(id);
});
exports.deleteStudent = deleteStudent;
