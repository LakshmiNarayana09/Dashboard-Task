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