
import React, { useEffect, useState } from "react";
import { X, ChevronDown } from "lucide-react";
import type { NewEventFormValues, CalendarCategoryKey } from "../../types/calendar";
import { CALENDAR_CATEGORIES } from "../../data/mockCalendarData";

interface NewEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (values: NewEventFormValues) => void;
  defaultDate?: Date;
}

function toDateInputValue(date: Date): string {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function emptyForm(
  defaultDate?: Date
): NewEventFormValues {
  const dateStr = toDateInputValue(
    defaultDate ?? new Date()
  );

  return {
    title: "",
    description: "",
    startTime: "00:00",
    startDate: dateStr,
    endTime: "00:00",
    endDate: dateStr,
    allDay: true,
    repeat: false,
    category: "important",
  };
}

export const NewEventModal: React.FC<
  NewEventModalProps
> = ({
  isOpen,
  onClose,
  onCreate,
  defaultDate,
}) => {
  const [values, setValues] =
    useState<NewEventFormValues>(
      emptyForm(defaultDate)
    );

  useEffect(() => {
    if (isOpen) {
      setValues(emptyForm(defaultDate));
    }
  }, [isOpen, defaultDate]);

  if (!isOpen) return null;

  const update = <
    K extends keyof NewEventFormValues
  >(
    key: K,
    value: NewEventFormValues[K]
  ) => {
    setValues((v) => ({
      ...v,
      [key]: value,
    }));
  };

  const handleCreate = () => {
    if (!values.title.trim()) return;

    onCreate(values);
  };

  const activeCategory =
    CALENDAR_CATEGORIES.find(
      (c) => c.key === values.category
    );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="my-auto max-h-[95vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-4 shadow-xl sm:max-h-none sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            New Event
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4">
          
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">
              Title
            </label>

            <input
              type="text"
              value={values.title}
              onChange={(e) =>
                update("title", e.target.value)
              }
              placeholder="e.g. Sending order"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">
              Description
            </label>

            <textarea
              value={values.description}
              onChange={(e) =>
                update(
                  "description",
                  e.target.value
                )
              }
              rows={3}
              placeholder="e.g. Sending order #25789 Felecia Burke at 5:30"
              className="w-full resize-y rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">
              Time and Date
            </label>

            
            <div className="flex flex-col gap-2 sm:hidden">
              <div className="grid grid-cols-[90px_1fr] items-center gap-2">
                <span className="text-xs font-medium text-gray-400">
                  Start
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="time"
                    value={values.startTime}
                    onChange={(e) =>
                      update(
                        "startTime",
                        e.target.value
                      )
                    }
                    className="min-w-0 w-full rounded-lg border border-gray-200 px-2 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />

                  <input
                    type="date"
                    value={values.startDate}
                    onChange={(e) =>
                      update(
                        "startDate",
                        e.target.value
                      )
                    }
                    className="min-w-0 w-full rounded-lg border border-gray-200 px-2 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[90px_1fr] items-center gap-2">
                <span className="text-xs font-medium text-gray-400">
                  End
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="time"
                    value={values.endTime}
                    onChange={(e) =>
                      update(
                        "endTime",
                        e.target.value
                      )
                    }
                    className="min-w-0 w-full rounded-lg border border-gray-200 px-2 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />

                  <input
                    type="date"
                    value={values.endDate}
                    onChange={(e) =>
                      update(
                        "endDate",
                        e.target.value
                      )
                    }
                    className="min-w-0 w-full rounded-lg border border-gray-200 px-2 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                </div>
              </div>
            </div>

            
            <div className="hidden items-center gap-2 sm:flex">
              <input
                type="time"
                value={values.startTime}
                onChange={(e) =>
                  update(
                    "startTime",
                    e.target.value
                  )
                }
                className="w-20 rounded-lg border border-gray-200 px-2 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />

              <input
                type="date"
                value={values.startDate}
                onChange={(e) =>
                  update(
                    "startDate",
                    e.target.value
                  )
                }
                className="min-w-0 flex-1 rounded-lg border border-gray-200 px-2 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />

              <span className="shrink-0 text-gray-300">
                —
              </span>

              <input
                type="time"
                value={values.endTime}
                onChange={(e) =>
                  update(
                    "endTime",
                    e.target.value
                  )
                }
                className="w-20 rounded-lg border border-gray-200 px-2 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />

              <input
                type="date"
                value={values.endDate}
                onChange={(e) =>
                  update(
                    "endDate",
                    e.target.value
                  )
                }
                className="min-w-0 flex-1 rounded-lg border border-gray-200 px-2 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
            </div>
          </div>

          
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={values.allDay}
                onChange={(e) =>
                  update(
                    "allDay",
                    e.target.checked
                  )
                }
                className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
              />

              All Day
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={values.repeat}
                onChange={(e) =>
                  update(
                    "repeat",
                    e.target.checked
                  )
                }
                className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
              />

              Repeat
            </label>
          </div>

          
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">
              Calendar
            </label>

            <div className="relative">
              <select
                value={values.category}
                onChange={(e) =>
                  update(
                    "category",
                    e.target
                      .value as CalendarCategoryKey
                  )
                }
                className="w-full appearance-none rounded-lg border border-gray-200 py-2 pl-8 pr-8 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                {CALENDAR_CATEGORIES.map(
                  (category) => (
                    <option
                      key={category.key}
                      value={category.key}
                    >
                      {category.label}
                    </option>
                  )
                )}
              </select>

              {activeCategory && (
                <span
                  className={`pointer-events-none absolute left-3 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-sm ${activeCategory.colorClass}`}
                />
              )}

              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

       
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleCreate}
            className="w-full rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 sm:w-auto"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewEventModal;