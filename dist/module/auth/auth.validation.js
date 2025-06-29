"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const loginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z
            .string({ required_error: "ID is required" })
            .min(3, { message: "ID must be at least 3 characters long" }),
        password: zod_1.z
            .string({ required_error: "Password is required" })
            .min(3, { message: "Password must be at least 3 characters long" }),
    }),
});
exports.AuthValidation = {
    loginValidationSchema,
};
