
import { CalendarDays, Check, Clock3, MessageCircle, Paperclip, Send, X } from "lucide-react";

import type { Project } from "../../types/projects";

interface ProjectDetailsModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
}

function ProjectDetailsModal({
  isOpen,
  project,
  onClose,
}: ProjectDetailsModalProps) {
  if (!isOpen || !project) {
    return null;
  }

  const checklist = [
    {
      title: "Create wireframes",
      completed: true,
    },
    {
      title: "UI/UX design development",
      completed: true,
    },
    {
      title: "Layout design",
      completed: true,
    },
    {
      title: "Functional programming",
      completed: false,
    },
    {
      title: "Testing for possible errors",
      completed: false,
    },
    {
      title: "Final check and presentation",
      completed: false,
    },
  ];

  const completedTasks = checklist.filter(
    (task) => task.completed
  ).length;

  const checklistProgress = Math.round(
    (completedTasks / checklist.length) * 100
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 p-4"
      onClick={onClose}
    >
      <div
        onClick={(event) =>
          event.stopPropagation()
        }
        className="relative max-h-[92vh] w-full max-w-[430px] overflow-hidden rounded-lg bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            
            <div
              className={`
                flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-full
                ${project.iconBg ?? "bg-blue-50"}
              `}
            >
              <span
                className={`
                  text-sm font-semibold
                  ${project.iconColor ?? "text-blue-600"}
                `}
              >
                {project.icon}
              </span>
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold text-gray-700">
                {project.name}
              </h2>

              <p className="text-[10px] text-gray-400">
                {project.company}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          >
            <X size={14} />
          </button>
        </div>

        <div className="max-h-[calc(92vh-70px)] overflow-y-auto px-5 py-4">

          <section>
            <h3 className="mb-3 text-[9px] font-semibold uppercase tracking-wide text-gray-400">
              Details
            </h3>

            <div className="grid grid-cols-3 gap-3">

              <div className="rounded-md bg-gray-50 p-2.5">
                <div className="mb-1 flex items-center gap-1.5 text-gray-400">
                  <Clock3 size={11} />

                  <span className="text-[8px]">
                    Budget
                  </span>
                </div>

                <p className="text-[9px] font-medium text-gray-600">
                  $ 2,500,000
                </p>
              </div>

              <div className="rounded-md bg-gray-50 p-2.5">
                <div className="mb-1 flex items-center gap-1.5 text-gray-400">
                  <CalendarDays size={11} />

                  <span className="text-[8px]">
                    Start Date
                  </span>
                </div>

                <p className="text-[9px] font-medium text-gray-600">
                  07 Jul, 2020
                </p>
              </div>

              
              <div className="rounded-md bg-gray-50 p-2.5">
                <div className="mb-1 flex items-center gap-1.5 text-gray-400">
                  <CalendarDays size={11} />

                  <span className="text-[8px]">
                    End Date
                  </span>
                </div>

                <p className="text-[9px] font-medium text-gray-600">
                  24 Jul, 2020
                </p>
              </div>
            </div>
          </section>

          <section className="mt-5">
            <h3 className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-gray-400">
              Description
            </h3>

            <p className="text-[9px] leading-4 text-gray-500">
              {project.description}
            </p>
          </section>

          <section className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                Checklist
              </h3>

              <span className="text-[9px] font-medium text-gray-400">
                {checklistProgress}%
              </span>
            </div>

            <div className="mb-3 h-1 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-green-500 transition-all"
                style={{
                  width: `${checklistProgress}%`,
                }}
              />
            </div>

            <div className="space-y-1">
              {checklist.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md px-1 py-1.5 hover:bg-gray-50"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className={`
                        flex h-4 w-4
                        shrink-0
                        items-center justify-center
                        rounded-full
                        border
                        ${
                          task.completed
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-green-400 text-green-500"
                        }
                      `}
                    >
                      {task.completed && (
                        <Check size={9} />
                      )}
                    </span>

                    <span
                      className={`
                        truncate text-[9px]
                        ${
                          task.completed
                            ? "text-gray-500"
                            : "text-gray-600"
                        }
                      `}
                    >
                      {task.title}
                    </span>
                  </div>

                  {!task.completed && (
                    <span className="text-[8px] text-gray-400">
                      ⋮⋮
                    </span>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-2 text-[9px] font-medium text-green-600 hover:text-green-700"
            >
              + Add Checklist Item
            </button>
          </section>

          <section className="mt-5">
            <div className="mb-3 flex items-center gap-3">
              <h3 className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                Comments
              </h3>

              <span className="text-[8px] text-gray-400">
                2 comments
              </span>
            </div>

            <div className="mb-4 flex items-center gap-2 rounded-md border border-gray-200 px-2">
              <input
                type="text"
                placeholder="Add Comment..."
                className="h-8 min-w-0 flex-1 text-[9px] text-gray-600 outline-none placeholder:text-gray-300"
              />

              <button
                type="button"
                className="text-gray-300 hover:text-gray-500"
              >
                <Paperclip size={11} />
              </button>

              <button
                type="button"
                className="text-gray-300 hover:text-gray-500"
              >
                <MessageCircle size={11} />
              </button>

              <button
                type="button"
                className="text-gray-300 hover:text-green-500"
              >
                <Send size={11} />
              </button>
            </div>

            <div className="mb-4 flex gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-200 text-[7px] font-semibold text-gray-600">
                JW
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-[9px] font-semibold text-gray-600">
                    Jane Wilson
                  </p>

                  <span className="text-[8px] text-gray-300">
                    5 min ago
                  </span>
                </div>

                <p className="mt-1 text-[9px] leading-4 text-gray-500">
                  Hi Cody, any progress on the
                  project? 😊
                </p>
              </div>
            </div>

            <div className="mb-4 flex gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-200 text-[7px] font-semibold text-gray-600">
                JH
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-[9px] font-semibold text-gray-600">
                    Jacob Hawkins
                  </p>

                  <span className="text-[8px] text-gray-300">
                    10 min ago
                  </span>
                </div>

                <p className="mt-1 text-[9px] leading-4 text-gray-500">
                  Hi Jane! Yes, I just finished
                  developing the chat template.
                </p>

                <div className="mt-2 flex gap-1.5">
                  <div className="h-8 w-8 rounded bg-gray-100" />
                  <div className="h-8 w-8 rounded bg-gray-100" />
                  <div className="h-8 w-8 rounded bg-gray-100" />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-200 text-[7px] font-semibold text-gray-600">
                RC
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-[9px] font-semibold text-gray-600">
                    Regina Cooper
                  </p>

                  <span className="text-[8px] text-gray-300">
                    15 min ago
                  </span>
                </div>

                <p className="mt-1 text-[9px] leading-4 text-gray-500">
                  Hi Jacob. Will you be able to
                  finish this task by tomorrow?
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsModal;