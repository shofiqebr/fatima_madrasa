"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
// src/modules/user/user.validation.ts
const zod_1 = require("zod");
const user_constrants_1 = require("./user.constrants");
exports.createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        // email: z.string().email(),
        password: zod_1.z.string().min(3),
        role: zod_1.z.nativeEnum(user_constrants_1.USER_ROLE),
        phone: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        city: zod_1.z.string().optional(),
    }),
});
exports.updateUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        // email: z.string().email().optional(),
        password: zod_1.z.string().min(6).optional(),
        role: zod_1.z.nativeEnum(user_constrants_1.USER_ROLE).optional(),
        phone: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        city: zod_1.z.string().optional(),
    }),
});
