// src/modules/student/student.service.ts

import mongoose from 'mongoose';
import { IStudent, IStudentCreate } from './student.interface';
import { Student } from './student.model';
import bcrypt from 'bcrypt';
import config from '../../app/config';
import { IUser } from '../user/user.interface';
import { USER_ROLE } from '../user/user.constrants';
import { UserModel } from '../user/user.model';

// src/modules/student/student.service.ts

export const createStudent = async (
  userPayload: Partial<IUser>,
  studentPayload: IStudentCreate
): Promise<IStudent> => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const defaultPassword = 'student123';
    const hashedPassword = await bcrypt.hash(
      defaultPassword,
      Number(config.bcrypt_salt_rounds)
    );

    const finalUserPayload: Partial<IUser> = {
      ...userPayload,
      password: hashedPassword,
      role: USER_ROLE.STUDENT,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const [newUser] = await UserModel.create([finalUserPayload], { session });

    const [newStudent] = await Student.create(
      [{ ...studentPayload, user: newUser._id }],
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};


export const getAllStudents = async (): Promise<IStudent[]> => {
  return await Student.find().populate('user', "role");
};

export const getSingleStudent = async (id: string): Promise<IStudent | null> => {
  return await Student.findById(id).populate('user');
};

export const updateStudent = async (
  id: string,
  payload: Partial<IStudent>
): Promise<IStudent | null> => {
  return await Student.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteStudent = async (id: string): Promise<IStudent | null> => {
  return await Student.findByIdAndDelete(id);
};
