
import React, { createContext, useContext, useState } from "react";
import type { CalendarCategoryKey } from "../types/calendar";
import { CALENDAR_CATEGORIES } from "../data/mockCalendarData";

interface CalendarFilterContextValue {
  activeCategories: CalendarCategoryKey[];
  toggleCategory: (key: CalendarCategoryKey) => void;
}

const CalendarFilterContext = createContext<CalendarFilterContextValue | undefined>(undefined);

export const CalendarFilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeCategories, setActiveCategories] = useState<CalendarCategoryKey[]>(
    CALENDAR_CATEGORIES.map((c) => c.key)
  );

  const toggleCategory = (key: CalendarCategoryKey) => {
    setActiveCategories((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <CalendarFilterContext.Provider value={{ activeCategories, toggleCategory }}>
      {children}
    </CalendarFilterContext.Provider>
  );
};

export function useCalendarFilter() {
  const ctx = useContext(CalendarFilterContext);
  if (!ctx) {
    throw new Error("useCalendarFilter must be used within a CalendarFilterProvider");
  }
  return ctx;
}