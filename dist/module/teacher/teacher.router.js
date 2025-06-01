"use strict";
// src/modules/teacher/teacher.route.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const teacher_validation_1 = require("./teacher.validation");
const teacher_controller_1 = require("./teacher.controller");
exports.teacherRouter = express_1.default.Router();
exports.teacherRouter.post('/teacher', (0, validateRequest_1.default)(teacher_validation_1.createTeacherZodSchema), teacher_controller_1.TeacherController.createTeacher);
exports.teacherRouter.get('/teacher', teacher_controller_1.TeacherController.getAllTeachers);
exports.teacherRouter.get('/teacher/:id', teacher_controller_1.TeacherController.getSingleTeacher);
exports.teacherRouter.patch('/teacher/:id', teacher_controller_1.TeacherController.updateTeacher);
exports.teacherRouter.delete('/teacher/:id', teacher_controller_1.TeacherController.deleteTeacher);
