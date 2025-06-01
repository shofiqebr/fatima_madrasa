export interface IHomework {
  title: string;
  description: string;
  classId: string;       // Reference to class
  subjectId: string;     // Reference to subject
  dueDate: string;       // ISO format date
  assignedBy: string;    // userId of teacher/admin
  attachments?: string[]; // Optional file URLs
}
