
export type CalendarCategoryKey = "important" | "meeting" | "event" | "work" | "other";

export interface CalendarCategory {
  key: CalendarCategoryKey;
  label: string;
  colorClass: string; 
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: string; 
  end: string; 
  time?: string; 
  category: CalendarCategoryKey;
}

export type CalendarViewMode = "month" | "week" | "day";

export interface NewEventFormValues {
  title: string;
  description: string;
  startTime: string; 
  startDate: string; 
  endTime: string; 
  endDate: string; 
  allDay: boolean;
  repeat: boolean;
  category: CalendarCategoryKey;
}


export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  time?: string;
  endTime?: string; 
  description?: string; 
  category: CalendarCategoryKey;
}