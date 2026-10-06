
import React, { useMemo, useState } from "react";
import { CalendarToolbar } from "./CalendarToolbar";
import { MonthGrid } from "./MonthGrid";
import { WeekGrid } from "./WeekGrid";
import { DayGrid } from "./DayGrid";
import { NewEventModal } from "./NewEventModal";
import { mockCalendarEvents } from "../../data/mockCalendarData";
import { useCalendarFilter } from "../../context/CalendarFilterContext";
import type {CalendarEvent, CalendarViewMode, NewEventFormValues } from "../../types/calendar";

export const CalendarPage: React.FC = () => {
 
  const [currentDate, setCurrentDate] = useState(
    new Date(2020, 8, 1)
  );

  const [viewMode, setViewMode] =
    useState<CalendarViewMode>("month");

  const [events, setEvents] =
    useState<CalendarEvent[]>(mockCalendarEvents);

  const [isAddEventOpen, setIsAddEventOpen] =
    useState(false);

  const { activeCategories } = useCalendarFilter();

  const handleDeleteEvent = (eventToDelete: CalendarEvent) => {
    setEvents((prevEvents) =>
      prevEvents.filter(
        (event) => event.id !== eventToDelete.id
      )
    );
  };

  const filteredEvents = useMemo(
    () =>
      events.filter((event) =>
        activeCategories.includes(event.category)
      ),
    [events, activeCategories]
  );

  const monthLabel = currentDate.toLocaleDateString(
    "en-US",
    {
      month: "long",
    }
  );

  const yearLabel =
    currentDate.getFullYear().toString();

  const goToPrevMonth = () => {
    setCurrentDate((date) => {
      if (viewMode === "day") {
        return new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() - 1
        );
      }

      if (viewMode === "week") {
        return new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() - 7
        );
      }

      return new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        1
      );
    });
  };

  const goToNextMonth = () => {
    setCurrentDate((date) => {
      if (viewMode === "day") {
        return new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + 1
        );
      }

      if (viewMode === "week") {
        return new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + 7
        );
      }

      return new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1
      );
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const handleCreateEvent = (
    values: NewEventFormValues
  ) => {
    const newEvent: CalendarEvent = {
      id: `${Date.now()}`,

      title: values.title.trim(),

      start: values.startDate,

      end: values.endDate,

      time: values.allDay
        ? undefined
        : values.startTime,

      endTime: values.allDay
        ? undefined
        : values.endTime,

      description: values.description.trim(),

      category: values.category,
    };

    setEvents((prevEvents) => [
      ...prevEvents,
      newEvent,
    ]);

    setIsAddEventOpen(false);
  };

  return (
    <div className="min-h-full bg-gray-50 p-6">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Calendar
        </h1>

        <button
          type="button"
          onClick={() => setIsAddEventOpen(true)}
          className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
        >
          + Add Event
        </button>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <CalendarToolbar
          monthLabel={monthLabel}
          yearLabel={yearLabel}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onPrev={goToPrevMonth}
          onNext={goToNextMonth}
          onToday={goToToday}
        />

        {viewMode === "month" ? (
          <MonthGrid
            currentDate={currentDate}
            events={filteredEvents}
            onDeleteEvent={handleDeleteEvent}
          />
        ) : viewMode === "week" ? (
          <WeekGrid
            currentDate={currentDate}
            events={filteredEvents}
          />
        ) : (
          <DayGrid
            currentDate={currentDate}
            events={filteredEvents}
          />
        )}
      </div>

      <NewEventModal
        isOpen={isAddEventOpen}
        onClose={() => setIsAddEventOpen(false)}
        onCreate={handleCreateEvent}
        defaultDate={currentDate}
      />
    </div>
  );
};

export default CalendarPage;