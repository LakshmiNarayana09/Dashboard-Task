
import type { SummaryCard, TrafficData, Activity, ActiveTask, ProjectData, Statistic } from "../types/dashboard";


export const summaryCards: SummaryCard[] = [
  {
    title: "Total Profit",
    value: "$12.500",
    change: "50.3%",
    positive: true,
    icon: "money",
  },
  {
    title: "Total Income",
    value: "30.800K",
    change: "10.5%",
    positive: false,
    icon: "chart",
  },
  {
    title: "New Users",
    value: "6.300K",
    change: "24.9%",
    positive: true,
    icon: "user",
  },
];

export const statisticsData = [
  {
    day: "Mon",
    sales: 150,
    expense: 100,
    profit: 250,
  },
  {
    day: "Tue",
    sales: 200,
    expense: 150,
    profit: 350,
  },
  {
    day: "Wed",
    sales: 180,
    expense: 120,
    profit: 300,
  },
  {
    day: "Thu",
    sales: 230,
    expense: 160,
    profit: 370,
  },
  {
    day: "Fri",
    sales: 190,
    expense: 130,
    profit: 280,
  },
  {
    day: "Sat",
    sales: 150,
    expense: 110,
    profit: 250,
  },
  {
    day: "Sun",
    sales: 80,
    expense: 60,
    profit: 140,
  },
];

export const analyticsData = [
  {
    day: "Mon",
    income: 100,
    expense: 80,
  },
  {
    day: "Tue",
    income: 160,
    expense: 120,
  },
  {
    day: "Wed",
    income: 130,
    expense: 150,
  },
  {
    day: "Thu",
    income: 220,
    expense: 170,
  },
  {
    day: "Fri",
    income: 160,
    expense: 110,
  },
  {
    day: "Sat",
    income: 300,
    expense: 140,
  },
  {
    day: "Sun",
    income: 350,
    expense: 100,
  },
];

export const trafficData: TrafficData[] = [
  {
    title: "Top Browser",
    name: "Chrome",
    value: "2500",
    icon: "🌐",
    iconBg: "bg-red-50",
  },
  {
    title: "Top Platform",
    name: "Mac OS",
    value: "2200",
    icon: "●",
    iconBg: "bg-gray-50",
  },
  {
    title: "Top Country",
    name: "Australia",
    value: "4550",
    icon: "🌏",
    iconBg: "bg-green-50",
  },
  {
    title: "Top Search Engine",
    name: "Google",
    value: "3100",
    icon: "G",
    iconBg: "bg-red-50",
  },
];

export const onlineUsersData = [
  {
    name: "Web",
    value: 20,
  },
  {
    name: "iOS",
    value: 45,
  },
  {
    name: "Android",
    value: 35,
  },
];

export const ordersData = [
  {
    name: "Beatrice Cooper",
    order: "#7938941",
    amount: "$2.500",
    payment: "Credit Card",
    date: "12.09.2019",
  },
  {
    name: "Robert Edwards",
    order: "#7938942",
    amount: "$1.500",
    payment: "PayPal",
    date: "12.09.2019",
  },
  {
    name: "Gloria McKinney",
    order: "#7938957",
    amount: "$5.600",
    payment: "Credit Card",
    date: "12.09.2019",
  },
  {
    name: "Randall Fisher",
    order: "#7938687",
    amount: "$2.850",
    payment: "PayPal",
    date: "12.09.2019",
  },
];

export const salesData = [
  { name: "Current Week", value: 2500 },
  { name: "Last Week", value: 1000 },
];

export const transactionsData = [
  {
    name: "Devon Williamson",
    time: "08:00 AM - 16 August",
    amount: "+$1,400",
    type: "Payment",
  },
  {
    name: "Laura Wilson",
    time: "09:45 AM - 16 August",
    amount: "-$850",
    type: "Refund",
  },
  {
    name: "Judith Black",
    time: "12:50 AM - 20 August",
    amount: "+$2,050",
    type: "Payment",
  },
  {
    name: "Philip Henry",
    time: "10:50 AM - 23 August",
    amount: "+$650",
    type: "Payment",
  },
  {
    name: "Mitchel Cooper",
    time: "12:45 AM - 25 August",
    amount: "+$900",
    type: "Payment",
  },
];

export const chatMessages = [
  {
    id: 1,
    message: "Lorem ipsum dolor sit amet?",
    time: "09:45am",
    sender: "other" as const,
  },
  {
    id: 2,
    message:
      "Consectetur adipiscing elit. Turpis risus commodo sed vivamus.",
    time: "09:47am",
    sender: "me" as const,
  },
  {
    id: 3,
    message: "Sollicitudin duis posuere pharetra.",
    time: "09:48am",
    sender: "other" as const,
  },
  {
    id: 4,
    message: "Lorem et elementum nisl ultrices.",
    time: "09:49am",
    sender: "me" as const,
  },
  {
    id: 5,
    message:
      "Posuere scelerisque elit duis tincidunt. Sapien proin lectus tincidunt.",
    time: "09:50am",
    sender: "other" as const,
  },
  {
    id: 6,
    message: "Eget cursus bibendum amet donec.",
    time: "09:52am",
    sender: "me" as const,
  },
  {
    id: 7,
    message: "Tellus accumsan, est orci purus lacus amet.",
    time: "09:54am",
    sender: "other" as const,
  },
  {
    id: 8,
    message:
      "Quam consectetur ut suspendisse facilisis in viverra laoreet.",
    time: "09:56am",
    sender: "me" as const,
  },
];

export const dashboardStatsData = [
  {
    title: "Total Visitors",
    value: "20.500",
    percentage: "+4.85%",
    positive: true,
    icon: "visitors",
  },
  {
    title: "Total Followers",
    value: "21.800",
    percentage: "+5.25%",
    positive: false,
    icon: "followers",
  },
  {
    title: "Total Likes",
    value: "30.400",
    percentage: "+3.55%",
    positive: true,
    icon: "likes",
  },
  {
    title: "Total Comments",
    value: "14.800",
    percentage: "-10.30%",
    positive: false,
    icon: "comments",
  },
];


export const followersData = [
  {
    name: "Facebook",
    value: 3500,
  },
  {
    name: "Twitter",
    value: 7800,
  },
  {
    name: "Instagram",
    value: 5800,
  },
  {
    name: "Youtube",
    value: 4700,
  },
];

export const followersTotal = "21.800";

export const followersGrowthData = [
  { day: "Mon", current: 3500, previous: 1000 },
  { day: "Tue", current: 3000, previous: 1200 },
  { day: "Wed", current: 2500, previous: 1800 },
  { day: "Thu", current: 1900, previous: 2000 },
  { day: "Fri", current: 2500, previous: 1000 },
  { day: "Sat", current: 3900, previous: 1700 },
  { day: "Sun", current: 2200, previous: 1500 },
];

export const followersGrowthSummary = {
  currentWeek: "21.800",
  lastWeek: "19.400",
};


export const newFollowersData = [
  {
    name: "Devon Williamson",
    role: "Product Designer, Apple Inc",
  },
  {
    name: "Debra Wilson",
    role: "Project Manager, Facebook Inc",
  },
  {
    name: "Judith Black",
    role: "Business Analyst, Google Inc",
  },
  {
    name: "Philip Henry",
    role: "Web Developer, Google Inc",
  },
  {
    name: "Mitchell Cooper",
    role: "Senior Vice President, Amazon Inc",
  },
];


export const profileData = {
  name: "Felicia Brown",
  role: "Project Manager",
  initial: "F",
  email: "example@mail.com",
  phone: "+123-4567-8800",
  birthday: "17 March, 1995",
  location: "New York, NY",
};

export const favoritesData = [
  {
    name: "Ronald Robertson",
    role: "Product Designer",
    initial: "R",
  },
  {
    name: "Regina Cooper",
    role: "Project Manager",
    initial: "R",
  },
  {
    name: "Judith Black",
    role: "Business Analyst",
    initial: "J",
  },
  {
    name: "Dustin Williamson",
    role: "Web Developer",
    initial: "D",
  },
  {
    name: "Calvin Flores",
    role: "Senior Vice President",
    initial: "C",
  },
];

export const visitsData = [
  { day: "Mon", visits: 2000 },
  { day: "Tue", visits: 1200 },
  { day: "Wed", visits: 3000 },
  { day: "Thu", visits: 1400 },
  { day: "Fri", visits: 2100 },
  { day: "Sat", visits: 5000 },
  { day: "Sun", visits: 2100 },
];

export const visitsSummary = {
  min: "1,400",
  average: "3,100",
  max: "9,500",
};


export const balanceData = [
  { value: 58 },
  { value: 50 },
  { value: 65 },
  { value: 52 },
  { value: 30 },
  { value: 42 },
  { value: 75 },
  { value: 45 },
  { value: 10 },
  { value: 28 },
  { value: 62 },
  { value: 35 },
  { value: 55 },
  { value: 20 },
  { value: 45 },
  { value: 15 },
];

export const balanceSummary = {
  balance: "$27,500.00",
  income: "$5,000",
  expense: "$2,500",
  incomeBottom: "$500",
  spendingBottom: "$200",
};


export interface NotificationData {
  id: number;
  name: string;
  time: string;
  avatar?: string;
}

export const notificationsData: NotificationData[] = [
  {
    id: 1,
    name: "Regina Cooper",
    time: "1 min ago",
  },
  {
    id: 2,
    name: "James Wilson",
    time: "5 min ago",
  },
  {
    id: 3,
    name: "Sophia Anderson",
    time: "10 min ago",
  },
  {
    id: 4,
    name: "Michael Brown",
    time: "20 min ago",
  },
  {
    id: 5,
    name: "Emma Davis",
    time: "1 hour ago",
  },
];

export const statisticsChartData = [
  { day: "Mon", income: 55, expense: 32 },
  { day: "Tue", income: 40, expense: 48 },
  { day: "Wed", income: 70, expense: 38 },
  { day: "Thu", income: 58, expense: 62 },
  { day: "Fri", income: 76, expense: 54 },
  { day: "Sat", income: 60, expense: 68 },
  { day: "Sun", income: 48, expense: 58 },
];


export const summaryCardsData = [
  {
    title: "Total Income",
    amount: "$8.500",
    change: "60.8%",
    positive: true,
    bars: [30, 45, 35, 60, 50, 75, 60, 80],
  },
  {
    title: "Total Expenses",
    amount: "$3.500",
    change: "21.6%",
    positive: false,
    bars: [55, 40, 70, 50, 75, 60, 85, 65],
  },
  {
    title: "Total Bonus",
    amount: "$5.100",
    change: "24.5%",
    positive: true,
    bars: [35, 55, 45, 70, 50, 80, 60, 75],
  },
];


export const dashboardTransactionsData = [
  {
    title: "Shopping",
    date: "25 Aug 2020",
    amount: "-$1.400",
    type: "shopping",
    color: "bg-emerald-400",
  },
  {
    title: "Travel",
    date: "21 Aug 2020",
    amount: "-$850",
    type: "travel",
    color: "bg-purple-400",
  },
  {
    title: "Food",
    date: "12 Aug 2020",
    amount: "-$2.150",
    type: "food",
    color: "bg-orange-400",
  },
  {
    title: "Medicine",
    date: "24 Aug 2020",
    amount: "-$650",
    type: "medicine",
    color: "bg-red-400",
  },
  {
    title: "Sport",
    date: "23 Aug 2020",
    amount: "-$800",
    type: "sport",
    color: "bg-green-500",
  },
];

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