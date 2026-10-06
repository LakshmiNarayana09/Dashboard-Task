import type { Note } from "../types/notes";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const mockNotes: Note[] = [
  { id: "1", date: "12 June, 2020", title: "The title of a note", body: LOREM, pinned: true, accentClass: "bg-amber-300" },
  { id: "2", date: "12 June, 2020", title: "The title of a note", body: LOREM, pinned: false, accentClass: "bg-amber-300" },
  { id: "3", date: "12 June, 2020", title: "The title of a note", body: LOREM, pinned: false, accentClass: "bg-amber-300" },
  { id: "4", date: "12 June, 2020", title: "The title of a note", body: LOREM, pinned: true },
  { id: "5", date: "12 June, 2020", title: "The title of a note", body: LOREM, pinned: false },
  { id: "6", date: "12 June, 2020", title: "The title of a note", body: LOREM, pinned: false },
  { id: "7", date: "12 June, 2020", title: "The title of a note", body: LOREM, pinned: true },
  { id: "8", date: "12 June, 2020", title: "The title of a note", body: LOREM, pinned: false },
  { id: "9", date: "12 June, 2020", title: "The title of a note", body: LOREM, pinned: false },
];