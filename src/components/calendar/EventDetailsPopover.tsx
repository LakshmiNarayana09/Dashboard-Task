

import React, { useState } from "react";
import {
  X,
  Pencil,
  Trash2,
  MoreHorizontal,
  Clock,
  AlignLeft,
  LayoutGrid,
} from "lucide-react";
import type { CalendarEvent } from "../../types/calendar";
import { CALENDAR_CATEGORIES } from "../../data/mockCalendarData";

interface EventDetailsPopoverProps {
  event: CalendarEvent;
  onClose: () => void;
  onEdit?: (event: CalendarEvent) => void;
  onDelete?: (event: CalendarEvent) => void;
}

export const EventDetailsPopover: React.FC<
  EventDetailsPopoverProps
> = ({
  event,
  onClose,
  onEdit,
  onDelete,
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] =
    useState(false);

  const category = CALENDAR_CATEGORIES.find(
    (c) => c.key === event.category
  );

  const dateLabel = new Date(
    event.start
  ).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const timeLabel = event.time
    ? event.endTime
      ? `${event.time} - ${event.endTime}`
      : event.time
    : null;

  
  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  
  const handleConfirmDelete = () => {
    if (onDelete) {
      onDelete(event);
    }

    setShowDeleteConfirm(false);
  };

  
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  return (
    <>
      
      <div
        className="fixed inset-0 z-30"
        onClick={onClose}
      />

      
      <div className="relative z-40 w-80 rounded-xl border border-gray-100 bg-white p-4 shadow-lg">
        
        <div className="mb-3 flex items-start justify-between gap-2">
          
          <div className="flex min-w-0 items-center gap-2">
            <span
              className={`h-3 w-3 shrink-0 rounded-sm ${
                category?.colorClass ?? "bg-gray-400"
              }`}
            />

            <h3 className="truncate text-sm font-semibold text-gray-900">
              {event.title}
            </h3>
          </div>

          
          <div className="flex shrink-0 items-center gap-1">
            
            {onEdit && (
              <button
                type="button"
                onClick={() => onEdit(event)}
                aria-label="Edit event"
                title="Edit event"
                className="rounded-md p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <Pencil className="h-4 w-4" />
              </button>
            )}

            
            {onDelete && (
              <button
                type="button"
                onClick={handleDeleteClick}
                aria-label="Delete event"
                title="Delete event"
                className="rounded-md p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            )}

            
            <button
              type="button"
              aria-label="More options"
              title="More options"
              className="rounded-md p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>

            
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              title="Close"
              className="rounded-md p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        
        <div className="space-y-3 text-sm">
          
          <div className="flex items-start gap-2 text-gray-600">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />

            <span>
              {dateLabel}
              {timeLabel ? ` • ${timeLabel}` : ""}
            </span>
          </div>

          
          {event.description && (
            <div className="flex items-start gap-2 text-gray-500">
              <AlignLeft className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />

              <p className="leading-relaxed">
                {event.description}
              </p>
            </div>
          )}

         
          <div className="flex items-center gap-2 text-gray-600">
            <LayoutGrid className="h-4 w-4 shrink-0 text-gray-400" />

            <span
              className={`h-2.5 w-2.5 rounded-sm ${
                category?.colorClass ?? "bg-gray-400"
              }`}
            />

            <span>
              {category?.label ?? "Other"}
            </span>
          </div>
        </div>
      </div>

      
      {showDeleteConfirm && (
        <>
          
          <div className="fixed inset-0 z-[60] bg-black/30" />

          
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
              
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-base font-semibold text-gray-900">
                    Delete event?
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Are you sure you want to delete{" "}
                    <span className="font-medium text-gray-700">
                      "{event.title}"
                    </span>
                    ?
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCancelDelete}
                  className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  aria-label="Close confirmation"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              
              <div className="mt-5 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleCancelDelete}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EventDetailsPopover;


