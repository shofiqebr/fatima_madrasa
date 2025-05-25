import { IStudent } from './student.interface';
import { StudentModel } from './student.model';

export const StudentService = {
  async createStudent(payload: IStudent) {
    const student = await StudentModel.create(payload);
    return student;
  },
};
