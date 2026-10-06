
import React from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import type { CalendarViewMode } from "../../types/calendar";

interface CalendarToolbarProps {
  monthLabel: string;
  yearLabel: string;
  viewMode: CalendarViewMode;
  onViewModeChange: (mode: CalendarViewMode) => void;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
  onAddEvent?: () => void;
}

const VIEW_MODES: { key: CalendarViewMode; label: string }[] = [
  { key: "month", label: "Month" },
  { key: "week", label: "Week" },
  { key: "day", label: "Day" },
];

export const CalendarToolbar: React.FC<CalendarToolbarProps> = ({
  monthLabel,
  yearLabel,
  viewMode,
  onViewModeChange,
  onPrev,
  onNext,
  onToday,
  onAddEvent,
}) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onToday}
          className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200"
        >
          Today
        </button>
      </div>

      <div className="text-lg font-semibold text-gray-900">
        {monthLabel} <span className="font-normal text-gray-400">{yearLabel}</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
          {VIEW_MODES.map((mode) => (
            <button
              key={mode.key}
              type="button"
              onClick={() => onViewModeChange(mode.key)}
              className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                viewMode === mode.key ? "bg-emerald-500 text-white" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
        {onAddEvent && (
          <button
            type="button"
            onClick={onAddEvent}
            className="hidden items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-600 sm:flex"
          >
            <Plus className="h-4 w-4" />
            Add Event
          </button>
        )}
      </div>
    </div>
  );
};

export default CalendarToolbar;