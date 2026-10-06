export interface Project {
  id: number;
  name: string;
  company: string;
  description: string;
  progress: number;
  deadline: string;
  deadlineType: "normal" | "urgent";

  status: "Started" | "On Hold" | "Completed";

  icon: string;
  iconBg: string;
  iconColor: string;

  avatars: string[];
  members: string[];
}