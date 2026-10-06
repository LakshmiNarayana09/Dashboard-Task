import type { Contact } from "../types/contacts";

export const mockContacts: Contact[] = [
  { id: "1", name: "Regina Cooper", role: "Manager", email: "cooper@example.com", location: "Sochi, Russia", phone: "+1 (070) 123-4567" },
  {
    id: "2",
    name: "Judith Black",
    role: "Creative Director",
    email: "black@example.com",
    location: "New York, USA",
    phone: "+1 (070) 123-8459",
    birthday: "17 March, 1995",
    favoriteIds: ["7", "1"],
  },
  { id: "3", name: "Ronald Robertson", role: "Manager", email: "robe@example.com", location: "Paris, France", phone: "+1 (070) 123-9221" },
  { id: "4", name: "Dustin Williamson", role: "Designer", email: "williams@example.com", location: "Sydney, Australia", phone: "+1 (070) 123-0507" },
  { id: "5", name: "Calvin Flores", role: "Manager", email: "flores@example.com", location: "Berlin, Germany", phone: "+1 (070) 123-3791" },
  { id: "6", name: "Robert Edwards", role: "Developer", email: "edwards@example.com", location: "Shanghai, China", phone: "+1 (070) 123-1147" },
  { id: "7", name: "Colleen Warren", role: "Manager", email: "warren@example.com", location: "Ottawa, Canada", phone: "+1 (070) 123-9127" },
  { id: "8", name: "Nathan Fox", role: "Designer", email: "fox@example.com", location: "London, UK", phone: "+1 (070) 123-5073" },
  { id: "9", name: "Bessie Henry", role: "Developer", email: "henry@example.com", location: "New York, USA", phone: "+1 (070) 123-3578" },
  { id: "10", name: "Philip McCoy", role: "Manager", email: "mccoy@example.com", location: "Sydney, Australia", phone: "+1 (070) 123-4588" },
  {
    id: "11",
    name: "Jane Wilson",
    role: "Creative Director",
    email: "black@example.com",
    location: "New York, NY",
    phone: "+1 (070) 123-8459",
    birthday: "17 March, 1995",
    favoriteIds: ["7", "1"],
  },
];