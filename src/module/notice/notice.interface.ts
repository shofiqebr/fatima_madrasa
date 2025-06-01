export interface INotice {
  title: string;
  description: string;
  date: string; // ISO string
  audience: 'All' | 'Students' | 'Teachers' | 'Admins'; // Role-based visibility
  postedBy: string; // userId of admin/teacher
  isPublished: boolean;
}
