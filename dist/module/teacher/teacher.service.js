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
exports.TeacherService = exports.deleteTeacher = exports.updateTeacher = exports.getSingleTeacher = exports.getAllTeachers = exports.createTeacher = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../user/user.model");
const config_1 = __importDefault(require("../../app/config"));
const user_constrants_1 = require("../user/user.constrants");
const teacher_model_1 = require("../teacher/teacher.model");
const createTeacher = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    try {
        // Step 1: Create User
        const defaultPassword = 'teacher123'; // or from config
        const hashedPassword = yield bcrypt_1.default.hash(defaultPassword, Number(config_1.default.bcrypt_salt_rounds));
        const userPayload = {
            name: payload.name,
            // id: payload.id,
            phone: payload.phone,
            password: hashedPassword,
            role: user_constrants_1.USER_ROLE.TEACHER,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const [newUser] = yield user_model_1.UserModel.create([userPayload], { session });
        // Step 2: Create Teacher with user ref
        const teacherPayload = Object.assign(Object.assign({}, payload), { user: newUser._id });
        const [newTeacher] = yield teacher_model_1.Teacher.create([teacherPayload], { session });
        yield session.commitTransaction();
        session.endSession();
        return newTeacher;
    }
    catch (error) {
        yield session.abortTransaction();
        session.endSession();
        throw error;
    }
});
exports.createTeacher = createTeacher;
const getAllTeachers = () => __awaiter(void 0, void 0, void 0, function* () {
    return teacher_model_1.Teacher.find().populate('user');
});
exports.getAllTeachers = getAllTeachers;
const getSingleTeacher = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return teacher_model_1.Teacher.findById(id).populate('user');
});
exports.getSingleTeacher = getSingleTeacher;
const updateTeacher = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return teacher_model_1.Teacher.findByIdAndUpdate(id, payload, { new: true });
});
exports.updateTeacher = updateTeacher;
const deleteTeacher = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return teacher_model_1.Teacher.findByIdAndDelete(id);
});
exports.deleteTeacher = deleteTeacher;
exports.TeacherService = {
    createTeacher: exports.createTeacher,
    getAllTeachers: exports.getAllTeachers,
    getSingleTeacher: exports.getSingleTeacher,
    updateTeacher: exports.updateTeacher,
    deleteTeacher: exports.deleteTeacher
};
