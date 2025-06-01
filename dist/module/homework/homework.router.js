"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const homework_validation_1 = require("./homework.validation");
const homework_controller_1 = require("./homework.controller");
const homeworkRouter = express_1.default.Router();
homeworkRouter.post('/homework', (0, validateRequest_1.default)(homework_validation_1.homeworkZodSchema), homework_controller_1.HomeworkController.createHomework);
homeworkRouter.get('/homework', homework_controller_1.HomeworkController.getAllHomework);
homeworkRouter.get('/homework/:id', homework_controller_1.HomeworkController.getSingleHomework);
homeworkRouter.patch('/homework/:id', homework_controller_1.HomeworkController.updateHomework);
homeworkRouter.delete('/homework/:id', homework_controller_1.HomeworkController.deleteHomework);
exports.default = homeworkRouter;
