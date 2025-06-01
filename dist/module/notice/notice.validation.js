"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noticeZodSchema = void 0;
const zod_1 = require("zod");
exports.noticeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(5),
        description: zod_1.z.string().min(10),
        date: zod_1.z.string().datetime(),
        audience: zod_1.z.enum(['All', 'Students', 'Teachers', 'Admins']),
        postedBy: zod_1.z.string().min(1),
        isPublished: zod_1.z.boolean().default(true),
    }),
});
