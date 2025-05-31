import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { UserModel } from '../user/user.model';
import { ITeacher } from '../teacher/teacher.interface';
import config from '../../app/config';
import { USER_ROLE } from '../user/user.constrants';
import { Teacher } from '../teacher/teacher.model';


export const createTeacher = async (payload: ITeacher): Promise<ITeacher> => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Step 1: Create User
    const defaultPassword = 'teacher123'; // or from config
    const hashedPassword = await bcrypt.hash(
      defaultPassword,
      Number(config.bcrypt_salt_rounds)
    );

    const userPayload = {
      name: payload.name,
    //   email: payload.email,
      phone: payload.phone,
      password: hashedPassword,
      role: USER_ROLE.TEACHER,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const [newUser] = await UserModel.create([userPayload], { session });

    // Step 2: Create Teacher with user ref
    const teacherPayload = {
      ...payload,
      user: newUser._id,
    };

    const [newTeacher] = await Teacher.create([teacherPayload], { session });

    await session.commitTransaction();
    session.endSession();

    return newTeacher;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export const getAllTeachers = async (): Promise<ITeacher[]> => {
  return Teacher.find().populate('user');
};

export const getSingleTeacher = async (id: string): Promise<ITeacher | null> => {
  return Teacher.findById(id).populate('user');
};

export const updateTeacher = async (
  id: string,
  payload: Partial<ITeacher>
): Promise<ITeacher | null> => {
  return Teacher.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteTeacher = async (id: string): Promise<ITeacher | null> => {
  return Teacher.findByIdAndDelete(id);
};

export const TeacherService = {
    createTeacher,
    getAllTeachers,
    getSingleTeacher,
    updateTeacher,
    deleteTeacher
}