export type TaskColumnKey = "todo" | "in-progress" | "completed";

export interface TaskSubtask {
  id: string;
  title: string;
  done: boolean;
}

export interface TaskAssignee {
  id: string;
  name: string;
  avatar?: string;
}

export interface TaskCardData {
  id: string;
  column: TaskColumnKey;
  labelColors: string[]; 
  title: string;
  description?: string;
  dueDate: string; 
  images?: string[];
  subtasks?: TaskSubtask[];
  attachmentsCount?: number;
  commentsCount?: number;
  assignees: TaskAssignee[];
  labelIds?: string[];
}

export interface TaskColumnMeta {
  key: TaskColumnKey;
  label: string;
  accentClass: string; 
}

export interface TaskProject {
  id: string;
  name: string;
}

export type ColumnSortKey = "dueDate" | "title" | "assignee";

export interface TaskLabelTag {
  id: string;
  name: string;
  colorClass: string;
}

export type TaskDueFilter = "anytime" | "today" | "week" | "month" | "overdue";
export type TaskStatusFilter = "all" | "completed" | "incomplete";

export interface TaskFilters {
  search: string;
  labelIds: string[];
  memberIds: string[];
  dueDate: TaskDueFilter;
  status: TaskStatusFilter;
}

export interface TaskAttachmentFile {
  id: string;
  name: string;
  size: string;
  url: string;
}

export interface TaskComment {
  id: string;
  author: TaskAssignee;
  text: string;
  timestamp: string;
}

export interface TaskActivityEntry {
  id: string;
  author: TaskAssignee;
  action: string; 
  timestamp: string;
}



