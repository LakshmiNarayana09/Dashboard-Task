import type { CalendarEvent } from "../types/calendar";
import type { CalendarCategory } from "../types/calendar";

export const CALENDAR_CATEGORIES: CalendarCategory[] = [
  { key: "important", label: "Important", colorClass: "bg-red-400" },
  { key: "meeting", label: "Meeting", colorClass: "bg-sky-400" },
  { key: "event", label: "Event", colorClass: "bg-emerald-400" },
  { key: "work", label: "Work", colorClass: "bg-amber-400" },
  { key: "other", label: "Other", colorClass: "bg-gray-400" },
];

export const CATEGORY_STYLES: Record<CalendarCategory["key"], { bg: string; text: string }> = {
  important: { bg: "bg-red-100", text: "text-red-700" },
  meeting: { bg: "bg-sky-100", text: "text-sky-700" },
  event: { bg: "bg-emerald-100", text: "text-emerald-700" },
  work: { bg: "bg-amber-100", text: "text-amber-700" },
  other: { bg: "bg-gray-100", text: "text-gray-700" },
};

export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Sending order #25789",
    start: "2020-09-02",
    end: "2020-09-02",
    time: "00:30",
    endTime: "01:30",
    description:
      "Sending order #25789 to Felecia Burke at 5:30. Confirm courier pickup before close.",
    category: "important",
  },
  {
    id: "2",
    title: "Sending order #26583",
    start: "2020-09-02",
    end: "2020-09-02",
    time: "00:30",
    endTime: "01:30",
    description:
      "Sending order #25789 to Felecia Burke at 5:30. Confirm courier pickup before close.",
    category: "important",
  },

  {
    id: "3",
    title: "Another Event",
    start: "2020-09-05",
    end: "2020-09-05",
    time: "10:00",
    endTime: "11:00",
    description: "Another event",
    category: "work",
  },
  {
    id: "4",
    title: "Call with supplier",
    start: "2020-09-09",
    end: "2020-09-09",
    time: "15:00",
    endTime: "16:00",
    description: "Restock call with the supplier to confirm inventory for next month's orders.",
    category: "meeting",
  },
  {
    id: "5",
    title: "Fulfilling 'Project Rocket' batch",
    start: "2020-09-13",
    end: "2020-09-20",
    time: "10:00",
    endTime: "18:00",
    description: "Bulk fulfillment run for the Rocket batch — daily packing checkpoint at 10:00.",
    category: "work",
  },
  {
    id: "6",
    title: "Shipping delay follow-up",
    start: "2020-09-16",
    end: "2020-09-16",
    time: "10:00",
    endTime: "10:30",
    description: "Follow up with courier on delayed shipment for order #25802.",
    category: "work",
  },
  {
    id: "7",
    title: "Sending order #25810",
    start: "2020-09-23",
    end: "2020-09-25",
    time: "10:00",
    endTime: "11:00",
    description: "Sending order #25810 to Marcus Lee at 10:00. Includes gift wrap request.",
    category: "event",
  },
];