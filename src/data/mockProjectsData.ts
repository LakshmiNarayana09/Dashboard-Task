import type { Project } from "../types/projects";

export const projectData: Project[] = [
  {
    id: 1,
    name: "App Development",
    company: "Dropbox, Inc.",
    description:
      "Create a mobile application on iOS and Android devices.",
    progress: 50,
    deadline: "1 week left",
    deadlineType: "normal",
    status: "Started",

    icon: "D",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",

    avatars: ["JD", "AS", "MK"],
    members: ["John Doe", "Anna Smith", "Mike"],
  },

  {
    id: 2,
    name: "Website Redesign",
    company: "GitLab Inc.",
    description:
      "It is necessary to develop a website redesign in a corporate style.",
    progress: 75,
    deadline: "1 week left",
    deadlineType: "normal",
    status: "Started",

    icon: "G",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",

    avatars: ["AR", "NK"],
    members: ["Anna Roberts", "Nick"],
  },

  {
    id: 3,
    name: "Landing Page",
    company: "Bitbucket, Inc.",
    description:
      "It is necessary to create a landing together with the development of design.",
    progress: 100,
    deadline: "1 week left",
    deadlineType: "normal",
    status: "Completed",

    icon: "B",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",

    avatars: ["RK", "PS"],
    members: ["Robert", "Peter"],
  },

  {
    id: 4,
    name: "Parser Development",
    company: "Driveway, Inc.",
    description:
      "It is necessary to develop a ticket site parser in python.",
    progress: 50,
    deadline: "5 days left",
    deadlineType: "urgent",
    status: "Started",

    icon: "Py",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",

    avatars: ["AM", "RS", "VK"],
    members: ["Alex", "Robert", "Vikram"],
  },

  {
    id: 5,
    name: "App Development",
    company: "Slack Technologies, Inc.",
    description:
      "Create a mobile application on iOS and Android devices.",
    progress: 50,
    deadline: "5 days left",
    deadlineType: "urgent",
    status: "Started",

    icon: "S",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",

    avatars: ["AB", "SM"],
    members: ["Alex Brown", "Sam"],
  },

  {
    id: 6,
    name: "App Development",
    company: "Google, Inc.",
    description:
      "Create a mobile application on iOS and Android devices.",
    progress: 25,
    deadline: "1 week left",
    deadlineType: "normal",
    status: "On Hold",

    icon: "G",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",

    avatars: ["SK", "RJ"],
    members: ["Suresh", "Raj"],
  },

  {
    id: 7,
    name: "Admin Dashboard",
    company: "ArtTemplate, Inc.",
    description:
      "Necessary to create an Admin Dashboard on Angular 8.",
    progress: 30,
    deadline: "5 days left",
    deadlineType: "urgent",
    status: "Started",

    icon: "A",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",

    avatars: ["RS", "AK"],
    members: ["Rahul", "Ankit"],
  },

  {
    id: 8,
    name: "Web App on Vue.js",
    company: "ArtTemplate, Inc.",
    description:
      "It is necessary to develop a web app on the framework Vue.js.",
    progress: 100,
    deadline: "1 week left",
    deadlineType: "normal",
    status: "Completed",

    icon: "V",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",

    avatars: ["MK", "AS"],
    members: ["Mike", "Anna"],
  },

  {
    id: 9,
    name: "App Development",
    company: "Facebook, Inc.",
    description:
      "Create a mobile application on iOS and Android devices.",
    progress: 50,
    deadline: "1 week left",
    deadlineType: "normal",
    status: "Started",

    icon: "M",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",

    avatars: ["DS", "NK"],
    members: ["David", "Nick"],
  },
];