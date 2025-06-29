"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classZodSchema = void 0;
const zod_1 = require("zod");
exports.classZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Class name is required' }).min(1),
        description: zod_1.z.string().optional(),
    }),
});
