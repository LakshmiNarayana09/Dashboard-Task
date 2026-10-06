export interface SummaryCard {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: "money" | "chart" | "user";
}

export interface TrafficData {
  title: string;
  name: string;
  value: string;
  icon: string;
  iconBg: string;
}

export interface Statistic {
  id: number;
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}

export interface ProjectData {
  name: string;
  value: number;
  color: string;
}

export interface ActiveTask {
  id: number;
  initials: string;
  user: string;
  action: string;
  project: string;
  color: string;
}

export interface Activity {
  id: number;
  time: string;
  user: string;
  action: string;
  project: string;
  date?: string;
}