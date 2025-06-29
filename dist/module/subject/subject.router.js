"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const subject_controller_1 = require("./subject.controller");
const subject_validation_1 = require("./subject.validation");
const subjectRouter = express_1.default.Router();
subjectRouter.post('/subject', (0, validateRequest_1.default)(subject_validation_1.subjectZodSchema), subject_controller_1.SubjectController.createSubject);
subjectRouter.get('/subject', subject_controller_1.SubjectController.getAllSubjects);
subjectRouter.get('/subject/:id', subject_controller_1.SubjectController.getSingleSubject);
subjectRouter.patch('/subject/:id', subject_controller_1.SubjectController.updateSubject);
subjectRouter.delete('/subject/:id', subject_controller_1.SubjectController.deleteSubject);
exports.default = subjectRouter;
