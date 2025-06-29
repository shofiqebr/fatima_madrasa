"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const student_router_1 = __importDefault(require("./module/student/student.router"));
const user_router_1 = __importDefault(require("./module/user/user.router"));
const teacher_router_1 = require("./module/teacher/teacher.router");
const homework_router_1 = __importDefault(require("./module/homework/homework.router"));
const notice_router_1 = __importDefault(require("./module/notice/notice.router"));
const result_router_1 = __importDefault(require("./module/result/result.router"));
const payment_router_1 = __importDefault(require("./module/payment/payment.router"));
const attendance_router_1 = __importDefault(require("./module/attendance/attendance.router"));
const auth_router_1 = __importDefault(require("./module/auth/auth.router"));
const class_router_1 = __importDefault(require("./module/class/class.router"));
const subject_router_1 = __importDefault(require("./module/subject/subject.router"));
const app = (0, express_1.default)();
// Allow multiple origins dynamically
const allowedOrigins = [
    // "https://bike-store-front.vercel.app",
    // "https://bike-store-blush.vercel.app",
    "http://localhost:3000"
];
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            // Allow requests from allowed origins
            callback(null, true);
        }
        else {
            // Reject requests from other origins
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true, // Allow cookies with cross-origin requests
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", auth_router_1.default);
app.use("/api", user_router_1.default);
app.use("/api", student_router_1.default);
app.use("/api", teacher_router_1.teacherRouter);
app.use("/api", homework_router_1.default);
app.use("/api", notice_router_1.default);
app.use("/api", result_router_1.default);
app.use("/api", payment_router_1.default);
app.use("/api", attendance_router_1.default);
app.use('/api', class_router_1.default);
app.use('/api', subject_router_1.default);
app.get('/', (req, res) => {
    res.send("Hello from Hazrat fatima madrasa");
});
exports.default = app;
