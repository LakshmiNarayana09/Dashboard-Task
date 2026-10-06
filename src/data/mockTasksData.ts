import type { TaskCardData, TaskColumnMeta, TaskProject, TaskLabelTag, TaskAssignee, TaskAttachmentFile, TaskComment, TaskActivityEntry }from "../types/tasks";


import img1 from "../assets/tasks/taskImg1.png";
import img2 from "../assets/tasks/taskImg2.png";
import img3 from "../assets/tasks/taskImg3.jpg";
import img4 from "../assets/tasks/taskImg4.jpg";
import img5 from "../assets/tasks/taskImg5.jpg";

export const TASK_COLUMNS: TaskColumnMeta[] = [
  { key: "todo", label: "Todo", accentClass: "bg-amber-400" },
  { key: "in-progress", label: "In Progress", accentClass: "bg-sky-400" },
  { key: "completed", label: "Completed", accentClass: "bg-emerald-400" },
];

export const mockTaskCards: TaskCardData[] = [
  {
    id: "1",
    column: "todo",
    labelColors: ["bg-emerald-400", "bg-emerald-400"],
    title: "Brand Logo Design",
    description: "Make a redesign of the logo in corporate colors.",
    dueDate: "Jun 17",
    attachmentsCount: 2,
    commentsCount: 5,
    assignees: [
      { id: "a1", name: "Regina Cooper" },
      { id: "a2", name: "Dustin Williamson" },
    ],
  },
  {
    id: "2",
    column: "todo",
    labelColors: ["bg-emerald-400"],
    title: "New Header Image",
    dueDate: "Jun 17",
    images: [img1],
    attachmentsCount: 1,
    commentsCount: 3,
    assignees: [{ id: "a3", name: "Jane Wilson" }],
  },
  {
    id: "3",
    column: "todo",
    labelColors: ["bg-emerald-400", "bg-emerald-400"],
    title: "Wireframe for App",
    description: "Make a wiremark for an app for a pre-presentation.",
    dueDate: "Jun 17",
    commentsCount: 1,
    assignees: [
      { id: "a1", name: "Regina Cooper" },
      { id: "a2", name: "Dustin Williamson" },
    ],
  },
  {
    id: "4",
    column: "in-progress",
    labelColors: ["bg-emerald-400", "bg-emerald-400"],
    title: "Updating Modules",
    description: "Step-by-step update of modules.",
    dueDate: "Jun 17",
    subtasks: [
      { id: "s1", title: "Database schema", done: true },
      { id: "s2", title: "API endpoints", done: false },
      { id: "s3", title: "Frontend wiring", done: false },
      { id: "s4", title: "QA pass", done: false },
    ],
    attachmentsCount: 2,
    commentsCount: 5,
    assignees: [
      { id: "a4", name: "Brandon Pena" },
      { id: "a5", name: "Jacob Hawkins" },
    ],
  },
  {
    id: "5",
    column: "in-progress",
    labelColors: ["bg-emerald-400", "bg-emerald-400"],
    title: "Template Progress",
    description: "Designing cool UI design templates.",
    dueDate: "Jun 17",
    subtasks: [
      { id: "t1", title: "Inbox Template", done: true },
      { id: "t2", title: "Chat Template", done: true },
      { id: "t3", title: "Tasks Template", done: true },
      { id: "t4", title: "Projects Template", done: false },
    ],
    attachmentsCount: 2,
    commentsCount: 5,
    assignees: [
      { id: "a1", name: "Regina Cooper" },
      { id: "a2", name: "Dustin Williamson" },
    ],
  },
  {
    id: "6",
    column: "completed",
    labelColors: ["bg-emerald-400", "bg-emerald-400"],
    title: "Refresh Photo Slider",
    dueDate: "Jun 17",
    images: [img2, img3, img4],
    attachmentsCount: 3,
    commentsCount: 2,
    assignees: [
      { id: "a1", name: "Regina Cooper" },
      { id: "a2", name: "Dustin Williamson" },
    ],
  },
  {
    id: "7",
    column: "completed",
    labelColors: ["bg-emerald-400", "bg-emerald-400"],
    title: "Server Startup",
    description: "Running the server in test mode and configuring.",
    dueDate: "Jun 17",
    commentsCount: 17,
    assignees: [
      { id: "a4", name: "Brandon Pena" },
      { id: "a5", name: "Jacob Hawkins" },
    ],
  },
  {
    id: "8",
    column: "completed",
    labelColors: ["bg-emerald-400"],
    title: "New Background",
    dueDate: "Jun 17",
    images: [img5],
    attachmentsCount: 1,
    commentsCount: 2,
    assignees: [{ id: "a3", name: "Jane Wilson" }],
  },
];


export const TASK_PROJECTS: TaskProject[] = [
  { id: "p1", name: "Design Plans" },
  { id: "p2", name: "Wireframe UI Kit" },
  { id: "p3", name: "Admin Dashboard" },
  { id: "p4", name: "Sachi - Hotel Booking" },
];

export const COLUMN_COLOR_OPTIONS: string[] = [
  "bg-red-400",
  "bg-teal-400",
  "bg-amber-400",
  "bg-sky-400",
  "bg-lime-400",
  "bg-emerald-500",
  "bg-purple-400",
  "bg-pink-400",
  "bg-gray-400",
];



export const TASK_LABEL_OPTIONS: TaskLabelTag[] = [
  { id: "design", name: "Design", colorClass: "bg-emerald-500" },
  { id: "frontend", name: "Frontend", colorClass: "bg-teal-500" },
  { id: "backend", name: "Backend", colorClass: "bg-red-400" },
];

export const TASK_MEMBER_OPTIONS: TaskAssignee[] = [
  { id: "a1", name: "Regina Cooper" },
  { id: "a2", name: "Dustin Williamson" },
  { id: "a3", name: "Jane Wilson" },
  { id: "a4", name: "Brandon Pena" },
  { id: "a5", name: "Jacob Hawkins" },
  { id: "a6", name: "Shane Black" },
];

// add near your other mock exports, alongside TASK_LABEL_OPTIONS etc.

export const TASK_ATTACHMENTS_BY_TASK: Record<string, TaskAttachmentFile[]> = {
  "5": [
    { id: "f1", name: "Inbox Template.jpg", size: "1.2 MB", url: "" },
    { id: "f2", name: "Chat Template.jpg", size: "980 KB", url: "" },
  ],
};

export const TASK_COMMENTS_BY_TASK: Record<string, TaskComment[]> = {
  "5": [
    {
      id: "c1",
      author: { id: "a3", name: "Jane Wilson" },
      text: "Hey, I've started reviewing the progress...",
      timestamp: "2 hours ago",
    },
    {
      id: "c2",
      author: { id: "a1", name: "Regina Cooper" },
      text: "Looks good! Let's finish the Projects template next.",
      timestamp: "1 hour ago",
    },
  ],
};

export const TASK_ACTIVITY_BY_TASK: Record<string, TaskActivityEntry[]> = {
  "5": [
    {
      id: "e1",
      author: { id: "a1", name: "Regina Cooper" },
      action: "marked Tasks Template complete",
      timestamp: "3 hours ago",
    },
  ],
};