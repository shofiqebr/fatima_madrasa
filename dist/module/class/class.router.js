"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const class_validation_1 = require("./class.validation");
const class_controller_1 = require("./class.controller");
const classRouter = express_1.default.Router();
classRouter.post('/class', (0, validateRequest_1.default)(class_validation_1.classZodSchema), class_controller_1.ClassController.createClass);
classRouter.get('/class', class_controller_1.ClassController.getAllClasses);
classRouter.get('/class/:id', class_controller_1.ClassController.getSingleClass);
classRouter.patch('/class/:id', (0, validateRequest_1.default)(class_validation_1.classZodSchema), class_controller_1.ClassController.updateClass);
classRouter.delete('/class/:id', class_controller_1.ClassController.deleteClass);
exports.default = classRouter;
