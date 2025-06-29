import { IResult, ISubjectResult } from './result.interface';
import { Result } from './result.model';

// 1. Define type for Create Input (excluding Mongo fields that are auto-generated)
type CreateResultInput = Omit<IResult, 'createdAt' | 'updatedAt' | 'totalMarks' | 'averageGPA' | 'overallGrade'>;

/**
 * Helper to calculate grade/GPA logic — expand this as needed.
 */
const calculateGPA = (subject: ISubjectResult): number => {
  const percentage = (subject.obtainedMarks / subject.fullMarks) * 100;

  if (percentage >= 80) return 5;
  if (percentage >= 70) return 4;
  if (percentage >= 60) return 3.5;
  if (percentage >= 50) return 3;
  if (percentage >= 40) return 2;
  if (percentage >= 33) return 1;
  return 0;
};

const calculateGrade = (gpa: number): string => {
  if (gpa === 5) return 'A+';
  if (gpa >= 4) return 'A';
  if (gpa >= 3.5) return 'A-';
  if (gpa >= 3) return 'B';
  if (gpa >= 2) return 'C';
  if (gpa >= 1) return 'D';
  return 'F';
};

// 2. Create Result
export const createResultService = async (payload: CreateResultInput): Promise<IResult> => {
  // Clone payload to avoid mutation
  const subjects = payload.subjects.map(subject => {
    const gpa = subject.gpa ?? calculateGPA(subject);
    const grade = subject.grade ?? calculateGrade(gpa);
    return { ...subject, gpa, grade };
  });

  const totalMarks = subjects.reduce((sum, sub) => sum + sub.obtainedMarks, 0);
  const averageGPA = parseFloat(
    (subjects.reduce((sum, sub) => sum + (sub.gpa || 0), 0) / subjects.length).toFixed(2)
  );

  const overallGrade = calculateGrade(averageGPA);

  const resultDoc = await Result.create({
    ...payload,
    subjects,
    totalMarks,
    averageGPA,
    overallGrade
  });

  return resultDoc;
};

// 3. Get All Results
export const getAllResultsService = async () => {
  return await Result.find().populate('student', "fullName rollNumber ");
};

// 4. Get Single Result
export const getResultByIdService = async (id: string) => {
  return await Result.findById(id).populate('student');
};

// 5. Update Result (basic — you can add validation here)
export const updateResultService = async (id: string, payload: Partial<IResult>) => {
  return await Result.findByIdAndUpdate(id, payload, { new: true });
};

// 6. Delete Result
export const deleteResultService = async (id: string) => {
  return await Result.findByIdAndDelete(id);
};

// 7. Export all as a service object
export const resultService = {
  createResultService,
  getAllResultsService,
  getResultByIdService,
  updateResultService,
  deleteResultService
};
