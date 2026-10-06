
import React, { useEffect, useMemo, useRef, useState } from "react";
import type { CalendarEvent } from "../../types/calendar";
import { CATEGORY_STYLES } from "../../data/mockCalendarData";

interface WeekGridProps {
  currentDate: Date;
  events: CalendarEvent[];
  onEventClick?: (event: CalendarEvent, rect: DOMRect) => void;
}

const HOURS = Array.from({ length: 24 }, (_, i) => i); // 0..23
const HOUR_HEIGHT = 64; 
const SHORT_WEEKDAYS = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

function toDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function startOfWeekMonday(date: Date): Date {
  const d = new Date(date);
  const day = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - day);
  return d;
}

function getWeekDays(currentDate: Date): Date[] {
  const start = startOfWeekMonday(currentDate);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    return d;
  });
}

function timeToMinutes(time?: string): number {
  if (!time) return 0;
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

interface PositionedEvent {
  event: CalendarEvent;
  top: number;
  height: number;
  col: number;
  totalCols: number;
}


function layoutDayEvents(dayEvents: CalendarEvent[]): PositionedEvent[] {
  const intervals = dayEvents
    .map((event) => {
      const startMin = timeToMinutes(event.time);
      const endMin = event.endTime ? timeToMinutes(event.endTime) : startMin + 60;
      return { event, startMin, endMin: Math.max(endMin, startMin + 30) };
    })
    .sort((a, b) => a.startMin - b.startMin);

  const columnEndTimes: number[] = [];
  const withCol = intervals.map((item) => {
    let col = columnEndTimes.findIndex((end) => end <= item.startMin);
    if (col === -1) {
      col = columnEndTimes.length;
      columnEndTimes.push(item.endMin);
    } else {
      columnEndTimes[col] = item.endMin;
    }
    return { ...item, col };
  });

  
  return withCol.map((item) => {
    const overlapping = withCol.filter(
      (other) => other.startMin < item.endMin && other.endMin > item.startMin
    );
    const totalCols = Math.max(1, ...overlapping.map((o) => o.col + 1));
    return {
      event: item.event,
      top: (item.startMin / 60) * HOUR_HEIGHT,
      height: ((item.endMin - item.startMin) / 60) * HOUR_HEIGHT,
      col: item.col,
      totalCols,
    };
  });
}

export const WeekGrid: React.FC<WeekGridProps> = ({ currentDate, events, onEventClick }) => {
  const weekDays = useMemo(() => getWeekDays(currentDate), [currentDate]);
  const todayKey = toDateKey(new Date());
  const scrollRef = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollTo = Math.max(0, (timeToMinutes("07:00") / 60) * HOUR_HEIGHT - 40);
      scrollRef.current.scrollTop = scrollTo;
    }
  }, []);

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const nowLabel = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });

  return (
    <div className="overflow-hidden rounded-xl border border-gray-100">
      
      <div className="grid grid-cols-[56px_repeat(7,1fr)] border-b border-gray-100 bg-gray-50">
        <div />
        {weekDays.map((date) => {
          const isToday = toDateKey(date) === todayKey;
          return (
            <div key={toDateKey(date)} className="flex flex-col items-center gap-1 py-2">
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                {SHORT_WEEKDAYS[(date.getDay() + 6) % 7]}
              </span>
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                  isToday ? "bg-emerald-500 text-white" : "text-gray-700"
                }`}
              >
                {date.getDate()}
              </span>
            </div>
          );
        })}
      </div>

      
      <div ref={scrollRef} className="max-h-[520px] overflow-y-auto">
        <div className="relative grid grid-cols-[56px_repeat(7,1fr)]">
          
          <div className="relative">
            {HOURS.map((hour) => (
              <div
                key={hour}
                style={{ height: HOUR_HEIGHT }}
                className="border-b border-gray-50 pr-2 text-right text-[10px] text-gray-400"
              >
                <span className="relative -top-1.5">{String(hour).padStart(2, "0")}:00</span>
              </div>
            ))}
          </div>

          
          {weekDays.map((date) => {
            const dateKey = toDateKey(date);
            const isToday = dateKey === todayKey;
            const dayEvents = events.filter(
              (event) => dateKey >= event.start && dateKey <= event.end
            );
            const positioned = layoutDayEvents(dayEvents);

            return (
              <div key={dateKey} className="relative border-l border-gray-100 first:border-l-0">
                {HOURS.map((hour) => (
                  <div key={hour} style={{ height: HOUR_HEIGHT }} className="border-b border-gray-50" />
                ))}

                {positioned.map(({ event, top, height, col, totalCols }) => {
                  const styles = CATEGORY_STYLES[event.category];
                  const widthPct = 100 / totalCols;
                  return (
                    <button
                      key={event.id}
                      type="button"
                      onClick={(e) => onEventClick?.(event, e.currentTarget.getBoundingClientRect())}
                      style={{
                        top,
                        height,
                        left: `${col * widthPct}%`,
                        width: `calc(${widthPct}% - 4px)`,
                      }}
                      className={`absolute overflow-hidden rounded-md border-l-2 px-1.5 py-1 text-left text-[11px] font-medium leading-tight shadow-sm ${styles.bg} ${styles.text}`}
                    >
                      {event.time && (event.endTime ? `${event.time} - ${event.endTime}` : event.time)}
                      <div className="truncate font-semibold">{event.title}</div>
                    </button>
                  );
                })}

                {isToday && nowMinutes >= 0 && (
                  <div
                    className="pointer-events-none absolute inset-x-0 z-10 border-t border-red-400"
                    style={{ top: (nowMinutes / 60) * HOUR_HEIGHT }}
                  >
                    <span className="absolute -left-14 -top-2.5 w-12 text-right text-[10px] font-medium text-red-500">
                      {nowLabel}
                    </span>
                    <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-red-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeekGrid;