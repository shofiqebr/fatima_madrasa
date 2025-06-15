import { Types } from "mongoose";

export interface ISubject {
  name: string;
  code: string;
  description?: string;
  classId: Types.ObjectId; 
  createdAt?: Date;
  updatedAt?: Date;
}