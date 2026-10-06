
import React from "react";
import type { CalendarEvent } from "../../types/calendar";
import { CATEGORY_STYLES } from "../../data/mockCalendarData";

interface EventBarProps {
  event: CalendarEvent;
  startCol: number;
  endCol: number;
  lane: number;
  isStart: boolean;
  isEnd: boolean;
  onClick?: (
    event: CalendarEvent,
    rect: DOMRect
  ) => void;
}

export const EventBar: React.FC<EventBarProps> = ({
  event,
  startCol,
  endCol,
  lane,
  isStart,
  isEnd,
  onClick,
}) => {
  const styles = CATEGORY_STYLES[event.category];

  return (
    <button
      type="button"
      onClick={(e) =>
        onClick?.(
          event,
          e.currentTarget.getBoundingClientRect()
        )
      }
      title={
        event.time
          ? `${event.title} · ${event.time}`
          : event.title
      }
      style={{
        gridColumn: `${startCol} / ${endCol + 1}`,
        gridRow: lane + 1,
      }}
      className={`z-10 flex items-center gap-1.5 overflow-hidden px-2 py-1 text-left text-xs font-medium ${styles.bg} ${styles.text} ${
        isStart ? "rounded-l-md" : ""
      } ${isEnd ? "rounded-r-md" : ""}`}
    >
      <span className="truncate">
        {event.title}
      </span>

      {event.time && isStart && (
        <span className="shrink-0 opacity-70">
          {event.time}
        </span>
      )}
    </button>
  );
};

export default EventBar;