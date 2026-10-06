import type { ChatConversation, ChatMessage } from "../types/chat";

export const TEAM_CONVERSATIONS: ChatConversation[] = [
  { id: "t1", kind: "team", name: "#Managers", lastMessage: "Hello, Mark! I am writing to introduce...", timestamp: "" },
  {
    id: "t2",
    kind: "team",
    name: "#Designers",
    lastMessage: "Hello. Can you drop the photos...",
    timestamp: "",
    unreadCount: 3,
    memberCount: 8,
    sharedFiles: [
      { id: "sf1", name: "Brand Styles Guide.pdf", size: "487 KB", kind: "pdf" },
      { id: "sf2", name: "Dashboard UI Kit.psd", size: "2.5 MB", kind: "photoshop" },
      { id: "sf3", name: "Rocket – Admin Dash...", size: "4.2 MB", kind: "sketch" },
      { id: "sf4", name: "Rocket – Admin Dash...", size: "4.2 MB", kind: "figma" },
    ],
    sharedPhotos: ["teal", "mosaic", "desert"],
    members: [
      { id: "mem1", name: "Jacob Hawkins", role: "UI/UX Designer", online: true },
      { id: "mem2", name: "Regina Cooper", role: "Project Manager", online: true },
      { id: "mem3", name: "Jane Wilson", role: "Project Manager", online: false },
    ],
  },
];

export const PEOPLE_CONVERSATIONS: ChatConversation[] = [
  { id: "p1", kind: "person", name: "Dustin Williamson", lastMessage: "Hello, Mark! I am writing to introduce...", timestamp: "" },
  { id: "p2", kind: "person", name: "Jane Wilson", lastMessage: "We use the Arts as a means of touc...", timestamp: "", unreadCount: 2 },
  { id: "p3", kind: "person", name: "Regina Cooper", lastMessage: "The Arts play a large role in the exp...", timestamp: "" },
  { id: "p4", kind: "person", name: "Brandon Pena", lastMessage: "The arts allow us to be as specific or...", timestamp: "" },
  { id: "p5", kind: "person", name: "Jacob Hawkins", lastMessage: "From dance and music to abstract...", timestamp: "" },
  { id: "p6", kind: "person", name: "Shane Black", lastMessage: "The arts teach us how to communic...", timestamp: "" },
  { id: "p7", kind: "person", name: "Priscilla Edwards", lastMessage: "Concept of life is shown through the...", timestamp: "" },
  { id: "p8", kind: "person", name: "Kristin Mccoy", lastMessage: "Inner thoughts and beauty in my life...", timestamp: "" },
  { id: "p9", kind: "person", name: "Bruce Russell", lastMessage: "", timestamp: "" },
];

export const mockMessagesByConversation: Record<string, ChatMessage[]> = {
  t1: [
    { id: "tm1", sender: "them", text: "Hello, Mark! I am writing to introduce our new onboarding process.", timestamp: "2 days ago" },
    { id: "tm2", sender: "me", text: "Thanks for the heads up — I'll review it today.", timestamp: "2 days ago" },
    { id: "tm3", sender: "them", text: "Let me know if you have any questions before the rollout.", timestamp: "1 day ago" },
  ],
  t2: [
    { id: "dm1", sender: "me", text: "Hi Cody, any progress on the project? 😊", timestamp: "1 day ago" },
    { id: "dm2", sender: "them", text: "Hi Jane!\nYes, I just finished developing the \"Chat\" template.", timestamp: "1 day ago" },
    {
      id: "dm3",
      sender: "them",
      images: ["teal", "mosaic", "desert"],
      timestamp: "1 day ago",
    },
    { id: "dm4", sender: "me", text: "It looks amazing. 😍\nThe customer will be very satisfied.", timestamp: "1 day ago" },
    { id: "dm5", sender: "them", text: "Thank you, glad you liked it.\nSend me Styles Guide.", timestamp: "1 day ago" },
    {
      id: "dm6",
      sender: "me",
      file: { name: "Brand Styles Guide.pdf", size: "487 KB" },
      text: "Download",
      timestamp: "2 min ago",
      dateLabel: "Today",
    },
    { id: "dm7", sender: "them", text: "I'll see later", timestamp: "1 min ago" },
  ],
  p2: [
    { id: "m1", sender: "me", text: "Hi Cody, any progress on the project? 😊", timestamp: "1 day ago" },
    { id: "m2", sender: "them", text: "Hi Jane!\nYes, I just finished developing the \"Chat\" template.", timestamp: "1 day ago" },
    {
      id: "m3",
      sender: "them",
      images: ["teal", "mosaic", "desert"],
      timestamp: "1 day ago",
    },
    { id: "m4", sender: "me", text: "It looks amazing. 😍\nThe customer will be very satisfied.", timestamp: "1 day ago" },
    { id: "m5", sender: "them", text: "Thank you, glad you liked it.\nSend me Styles Guide.", timestamp: "1 day ago" },
    {
      id: "m6",
      sender: "me",
      file: { name: "Brand Styles Guide.pdf", size: "487 KB" },
      text: "Download",
      timestamp: "2 min ago",
      dateLabel: "Today",
    },
    { id: "m7", sender: "them", text: "I'll see later", timestamp: "1 min ago" },
  ],
};