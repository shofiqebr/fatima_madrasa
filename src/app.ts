import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import cookieParser from "cookie-parser";
import studentRouter from './module/student/student.router';
import userRouter from './module/user/user.router';
import { teacherRouter } from './module/teacher/teacher.router';
import homeworkRouter from './module/homework/homework.router';
import noticeRouter from './module/notice/notice.router';
import resultRouter from './module/result/result.router';


const app: Application = express();

// Allow multiple origins dynamically
const allowedOrigins = [
  // "https://bike-store-front.vercel.app",
  // "https://bike-store-blush.vercel.app",
  "http://localhost:5173"
];

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      // Allow requests from allowed origins
      callback(null, true);
    } else {
      // Reject requests from other origins
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow cookies with cross-origin requests
}));
app.use(express.urlencoded({ extended: true }));

app.use("/api",userRouter);
app.use("/api",studentRouter);
app.use("/api",teacherRouter);
app.use("/api",homeworkRouter);
app.use("/api",noticeRouter);
app.use("/api",resultRouter);


app.get('/', (req: Request, res: Response) => {
  res.send("Hello from bike store");
});

export default app;
