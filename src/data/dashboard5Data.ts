
import type { Activity, ActiveTask, ProjectData, Statistic } from "../types/dashboard5";

export const statistics: Statistic[] = [
  {
    id: 1,
    title: "Total Tasks",
    value: "780",
    subtitle: "Total Tasks",
    icon: "file",
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: 2,
    title: "New Tasks",
    value: "136",
    subtitle: "New Tasks",
    icon: "plus",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    id: 3,
    title: "In Progress",
    value: "324",
    subtitle: "In Progress",
    icon: "clock",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: 4,
    title: "Done Tasks",
    value: "215",
    subtitle: "Done Tasks",
    icon: "check",
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
];

export const projects: ProjectData[] = [
  {
    name: "Ongoing",
    value: 420,
    color: "#35c9b7",
  },
  {
    name: "In Progress",
    value: 210,
    color: "#159447",
  },
  {
    name: "Done",
    value: 200,
    color: "#ffc82e",
  },
];

export const activeTasks: ActiveTask[] = [
  {
    id: 1,
    initials: "RC",
    user: "Regina Cooper",
    action: "Sending project",
    project: "#746 for revision to Leslie Miles",
    color: "#35c9b7",
  },
  {
    id: 2,
    initials: "RC",
    user: "Regina Cooper",
    action: "Sending project",
    project: "#746 for revision to Kristin Edwards",
    color: "#32b76b",
  },
  {
    id: 3,
    initials: "RC",
    user: "Regina Cooper",
    action: "Sending project",
    project: "#786 for revision to Regina Warren",
    color: "#35c9b7",
  },
  {
    id: 4,
    initials: "RC",
    user: "Regina Cooper",
    action: "Sending project",
    project: "#543 for revision to Stella Pena",
    color: "#ffc83d",
  },
];

export const activities: Activity[] = [
  {
    id: 1,
    time: "08:30",
    user: "Regina Cooper",
    action: "Added new project",
    project: "#443",
    date: "12 September",
  },
  {
    id: 2,
    time: "15:00",
    user: "Kristin Edwards",
    action: "Updated project",
    project: "#548",
  },
  {
    id: 3,
    time: "17:20",
    user: "Regina Cooper",
    action: "Closed project",
    project: "#129",
  },
  {
    id: 4,
    time: "14:00",
    user: "Jorgina Robertson",
    action: "Completed project",
    project: "#389",
    date: "11 September",
  },
  {
    id: 5,
    time: "15:20",
    user: "Regina Cooper",
    action: "Closed project",
    project: "#401",
  },
  {
    id: 6,
    time: "14:00",
    user: "Stella Pena",
    action: "Added new project",
    project: "#442",
  },
  {
    id: 7,
    time: "15:20",
    user: "Priscilla Russell",
    action: "Updated project",
    project: "#324",
  },
  {
    id: 8,
    time: "14:00",
    user: "Leslie Miles",
    action: "Added new project",
    project: "#441",
    date: "10 September",
  },
  {
    id: 9,
    time: "15:20",
    user: "Regina Cooper",
    action: "Added new project",
    project: "#440",
  },
  {
    id: 10,
    time: "14:40",
    user: "Regina Warren",
    action: "Updated project",
    project: "#174",
  },
];