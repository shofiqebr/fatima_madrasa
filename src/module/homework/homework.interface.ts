export interface IHomework {
  title: string;
  description: string;
  classId: string | { _id: string; name: string };       // ObjectId or populated
  subjectId: string | { _id: string; name: string };
  dueDate: string;
  assignedBy: string | { _id: string; name: string };
  attachments?: string[];
}
