"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const result_controller_1 = require("./result.controller");
const result_validation_1 = require("./result.validation");
const resultRouter = express_1.default.Router();
resultRouter.post('/result', (0, validateRequest_1.default)(result_validation_1.createResultSchema), result_controller_1.resultController.createResult);
resultRouter.get('/result', result_controller_1.resultController.getAllResults);
resultRouter.get('/result/:id', result_controller_1.resultController.getResultById);
resultRouter.patch('/result/:id', result_controller_1.resultController.updateResult);
resultRouter.delete('/result/:id', result_controller_1.resultController.deleteResult);
exports.default = resultRouter;
