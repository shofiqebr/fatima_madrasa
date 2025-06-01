"use strict";
// src/modules/student/student.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const student_validation_1 = require("./student.validation");
const studentRouter = express_1.default.Router();
studentRouter.post('/student', (0, validateRequest_1.default)(student_validation_1.createStudentWithUserZodSchema), student_controller_1.createStudentController);
studentRouter.get('/student', student_controller_1.getAllStudentsController);
studentRouter.get('/student/:id', student_controller_1.getSingleStudentController);
studentRouter.patch('/student/:id', student_controller_1.updateStudentController);
studentRouter.delete('/student/:id', student_controller_1.deleteStudentController);
exports.default = studentRouter;
