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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultService = exports.deleteResultService = exports.updateResultService = exports.getResultByIdService = exports.getAllResultsService = exports.createResultService = void 0;
const result_model_1 = require("./result.model");
/**
 * Helper to calculate grade/GPA logic — expand this as needed.
 */
const calculateGPA = (subject) => {
    const percentage = (subject.obtainedMarks / subject.fullMarks) * 100;
    if (percentage >= 80)
        return 5;
    if (percentage >= 70)
        return 4;
    if (percentage >= 60)
        return 3.5;
    if (percentage >= 50)
        return 3;
    if (percentage >= 40)
        return 2;
    if (percentage >= 33)
        return 1;
    return 0;
};
const calculateGrade = (gpa) => {
    if (gpa === 5)
        return 'A+';
    if (gpa >= 4)
        return 'A';
    if (gpa >= 3.5)
        return 'A-';
    if (gpa >= 3)
        return 'B';
    if (gpa >= 2)
        return 'C';
    if (gpa >= 1)
        return 'D';
    return 'F';
};
// 2. Create Result
const createResultService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Clone payload to avoid mutation
    const subjects = payload.subjects.map(subject => {
        var _a, _b;
        const gpa = (_a = subject.gpa) !== null && _a !== void 0 ? _a : calculateGPA(subject);
        const grade = (_b = subject.grade) !== null && _b !== void 0 ? _b : calculateGrade(gpa);
        return Object.assign(Object.assign({}, subject), { gpa, grade });
    });
    const totalMarks = subjects.reduce((sum, sub) => sum + sub.obtainedMarks, 0);
    const averageGPA = parseFloat((subjects.reduce((sum, sub) => sum + (sub.gpa || 0), 0) / subjects.length).toFixed(2));
    const overallGrade = calculateGrade(averageGPA);
    const resultDoc = yield result_model_1.Result.create(Object.assign(Object.assign({}, payload), { subjects,
        totalMarks,
        averageGPA,
        overallGrade }));
    return resultDoc;
});
exports.createResultService = createResultService;
// 3. Get All Results
const getAllResultsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield result_model_1.Result.find().populate('student');
});
exports.getAllResultsService = getAllResultsService;
// 4. Get Single Result
const getResultByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield result_model_1.Result.findById(id).populate('student');
});
exports.getResultByIdService = getResultByIdService;
// 5. Update Result (basic — you can add validation here)
const updateResultService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield result_model_1.Result.findByIdAndUpdate(id, payload, { new: true });
});
exports.updateResultService = updateResultService;
// 6. Delete Result
const deleteResultService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield result_model_1.Result.findByIdAndDelete(id);
});
exports.deleteResultService = deleteResultService;
// 7. Export all as a service object
exports.resultService = {
    createResultService: exports.createResultService,
    getAllResultsService: exports.getAllResultsService,
    getResultByIdService: exports.getResultByIdService,
    updateResultService: exports.updateResultService,
    deleteResultService: exports.deleteResultService
};
