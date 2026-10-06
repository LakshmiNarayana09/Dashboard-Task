
import React from "react";
import { X } from "lucide-react";
import type { CalendarEvent } from "../../types/calendar";
import { CATEGORY_STYLES } from "../../data/mockCalendarData";

interface DayEventsPopoverProps {
  date: Date;
  events: CalendarEvent[];
  onClose: () => void;
  onEventClick?: (event: CalendarEvent, rect: DOMRect) => void;
}

export const DayEventsPopover: React.FC<DayEventsPopoverProps> = ({
  date,
  events,
  onClose,
  onEventClick,
}) => {
  const dayLabel = date.toLocaleDateString("en-US", { weekday: "long", day: "numeric" });

  return (
    <>
      <div className="fixed inset-0 z-30" onClick={onClose} />

      <div className="relative z-40 w-56 rounded-xl border border-gray-100 bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2">
          <span className="text-sm font-semibold text-gray-900">{dayLabel}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-0.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="max-h-64 space-y-1 overflow-y-auto p-2">
          {events.map((event) => {
            const styles = CATEGORY_STYLES[event.category];
            return (
              <button
                key={event.id}
                type="button"
                onClick={(e) => onEventClick?.(event, e.currentTarget.getBoundingClientRect())}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-left text-xs font-medium ${styles.bg} ${styles.text} hover:opacity-80`}
              >
                <span className="truncate">{event.title}</span>
                {event.time && <span className="shrink-0 opacity-70">{event.time}</span>}
              </button>
            );
          })}

          {events.length === 0 && (
            <p className="px-2 py-3 text-center text-xs text-gray-400">No events</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DayEventsPopover;