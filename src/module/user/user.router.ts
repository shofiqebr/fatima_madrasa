// src/modules/user/user.routes.ts
import express from 'express';
import * as UserController from './user.controller';
import { createUserSchema, updateUserSchema } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

const userRouter = express.Router();

userRouter.post('/user/create-user', validateRequest(createUserSchema), UserController.createUserController);
userRouter.get('/', UserController.getAllUsersController);
userRouter.get('/:id', UserController.getSingleUserController);
userRouter.patch('/:id', validateRequest(updateUserSchema), UserController.updateUserController);
userRouter.delete('/:id', UserController.deleteUserController);

export default userRouter;
