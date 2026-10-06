

import React, { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { CalendarEvent } from "../../types/calendar";
import { EventBar } from "./EventBar";
import { DayEventsPopover } from "./DayEventsPopover";
import { EventDetailsPopover } from "./EventDetailsPopover";

interface MonthGridProps {
  currentDate: Date;
  events: CalendarEvent[];
  onDayClick?: (date: Date) => void;
  onEditEvent?: (event: CalendarEvent) => void;
  onDeleteEvent: (event: CalendarEvent) => void;
}

const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const MAX_LANES = 1;

function toDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function parseDateKey(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function startOfWeekMonday(date: Date): Date {
  const d = new Date(date);
  const day = (d.getDay() + 6) % 7;

  d.setDate(d.getDate() - day);

  return d;
}

function buildMonthWeeks(currentDate: Date): Date[][] {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstOfMonth = new Date(year, month, 1);
  const lastOfMonth = new Date(year, month + 1, 0);

  const gridStart = startOfWeekMonday(firstOfMonth);

  const gridEnd = startOfWeekMonday(lastOfMonth);
  gridEnd.setDate(gridEnd.getDate() + 6);

  const weeks: Date[][] = [];
  let cursor = new Date(gridStart);

  while (cursor <= gridEnd) {
    const week: Date[] = [];

    for (let i = 0; i < 7; i++) {
      week.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }

    weeks.push(week);
  }

  return weeks;
}

interface OpenDayPopover {
  date: Date;
  rect: DOMRect;
}

interface OpenEventPopover {
  event: CalendarEvent;
  rect: DOMRect;
}

export const MonthGrid: React.FC<MonthGridProps> = ({
  currentDate,
  events,
  onDayClick,
  onEditEvent,
  onDeleteEvent,
}) => {
  const weeks = useMemo(
    () => buildMonthWeeks(currentDate),
    [currentDate]
  );

  const todayKey = toDateKey(new Date());
  const currentMonth = currentDate.getMonth();

  const [openDayPopover, setOpenDayPopover] =
    useState<OpenDayPopover | null>(null);

  const [openEventPopover, setOpenEventPopover] =
    useState<OpenEventPopover | null>(null);

  
  const eventsForDate = (date: Date) => {
    const dateKey = toDateKey(date);

    return events.filter(
      (event) => event.start === dateKey
    );
  };

  const handleEventClick = (
    event: CalendarEvent,
    rect: DOMRect
  ) => {
    setOpenDayPopover(null);

    setOpenEventPopover((prev) =>
      prev && prev.event.id === event.id
        ? null
        : {
            event,
            rect,
          }
    );
  };

  const handleDeleteEvent = (
    event: CalendarEvent
  ) => {
    onDeleteEvent(event);

    setOpenEventPopover(null);
    setOpenDayPopover(null);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-100">
      
      <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="px-3 py-2 text-xs font-medium uppercase tracking-wide text-gray-400"
          >
            {day}
          </div>
        ))}
      </div>

      
      {weeks.map((week, weekIndex) => {
        const weekStart = week[0];
        const weekEnd = week[6];

        const weekEvents = events.filter((event) => {
          const eventStart = parseDateKey(event.start);

          return (
            eventStart >= weekStart &&
            eventStart <= weekEnd
          );
        });

        const laneEndCols: number[] = [];

        const placed = [...weekEvents]
          .sort(
            (a, b) =>
              parseDateKey(a.start).getTime() -
              parseDateKey(b.start).getTime()
          )
          .map((event) => {
            const startCol =
              week.findIndex(
                (date) =>
                  toDateKey(date) === event.start
              ) + 1;

            const endCol = startCol;

            let lane = laneEndCols.findIndex(
              (endAt) => endAt < startCol
            );

            if (lane === -1) {
              lane = laneEndCols.length;
              laneEndCols.push(endCol);
            } else {
              laneEndCols[lane] = endCol;
            }

            return {
              event,
              startCol,
              endCol,
              lane,
              isStart: true,
              isEnd: true,
            };
          });

        const visible = placed.filter(
          (p) => p.lane < MAX_LANES
        );

        
        const overflowByDay = new Map<
          number,
          number
        >();

        placed
          .filter((p) => p.lane >= MAX_LANES)
          .forEach((p) => {
            const col = p.startCol;

            overflowByDay.set(
              col,
              (overflowByDay.get(col) ?? 0) + 1
            );
          });

        return (
          <div
            key={weekIndex}
            className="relative border-b border-gray-100 last:border-b-0"
          >
            
            <div className="grid grid-cols-7">
              {week.map((date) => {
                const isCurrentMonth =
                  date.getMonth() === currentMonth;

                const isToday =
                  toDateKey(date) === todayKey;

                return (
                  <button
                    key={toDateKey(date)}
                    type="button"
                    onClick={() =>
                      onDayClick?.(date)
                    }
                    className={`flex min-h-[92px] flex-col items-start border-r border-gray-100 px-2 pt-2 text-left last:border-r-0 hover:bg-gray-50/60 ${
                      isCurrentMonth
                        ? ""
                        : "bg-gray-50/40"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
                        isToday
                          ? "bg-emerald-500 text-white"
                          : isCurrentMonth
                          ? "text-gray-700"
                          : "text-gray-300"
                      }`}
                    >
                      {date.getDate()}
                    </span>
                  </button>
                );
              })}
            </div>

            
            <div
              className="pointer-events-none absolute inset-x-0 top-9 z-10 grid grid-cols-7 gap-y-1"
              style={{
                gridAutoRows: "20px",
              }}
            >
              
              {visible.map(
                ({
                  event,
                  startCol,
                  endCol,
                  lane,
                  isStart,
                  isEnd,
                }) => (
                  <div
                    key={event.id}
                    className="pointer-events-auto"
                    style={{
                      gridColumn: `${startCol} / ${
                        endCol + 1
                      }`,
                      gridRow: lane + 1,
                    }}
                  >
                    <EventBar
                      event={event}
                      startCol={startCol}
                      endCol={endCol}
                      lane={lane}
                      isStart={isStart}
                      isEnd={isEnd}
                      onClick={handleEventClick}
                    />
                  </div>
                )
              )}

              {Array.from(
                overflowByDay.entries()
              ).map(([col, count]) => {
                const dayDate = week[col - 1];

                return (
                  <div
                    key={`overflow-${col}`}
                    style={{
                      gridColumn: `${col} / ${
                        col + 1
                      }`,
                      gridRow: MAX_LANES + 1,
                    }}
                    className="pointer-events-auto px-2"
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();

                        const rect =
                          e.currentTarget.getBoundingClientRect();

                        setOpenEventPopover(null);

                        setOpenDayPopover((prev) =>
                          prev &&
                          toDateKey(prev.date) ===
                            toDateKey(dayDate)
                            ? null
                            : {
                                date: dayDate,
                                rect,
                              }
                        );
                      }}
                      className="relative z-20 text-xs font-medium text-gray-400 hover:text-gray-600"
                    >
                      +{count} more
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {openDayPopover &&
        createPortal(
          <div
            className="fixed z-50"
            style={{
              top:
                openDayPopover.rect.bottom + 6,
              left: openDayPopover.rect.left,
            }}
          >
            <DayEventsPopover
              date={openDayPopover.date}
              events={eventsForDate(
                openDayPopover.date
              )}
              onClose={() =>
                setOpenDayPopover(null)
              }
              onEventClick={(event, rect) => {
                setOpenDayPopover(null);

                setOpenEventPopover({
                  event,
                  rect,
                });
              }}
            />
          </div>,
          document.body
        )}

      {openEventPopover &&
        createPortal(
          <div
            className="fixed z-50"
            style={{
              top:
                openEventPopover.rect.bottom + 6,
              left:
                openEventPopover.rect.left,
            }}
          >
            <EventDetailsPopover
              event={openEventPopover.event}
              onClose={() =>
                setOpenEventPopover(null)
              }
              onEdit={
                onEditEvent
                  ? (event) => {
                      onEditEvent(event);
                      setOpenEventPopover(null);
                    }
                  : undefined
              }
              onDelete={handleDeleteEvent}
            />
          </div>,
          document.body
        )}
    </div>
  );
};

export default MonthGrid;