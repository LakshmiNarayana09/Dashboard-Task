import React, { useState } from "react";
import { ChevronDown, CheckCircle2, Circle } from "lucide-react";
import type { TaskSubtask } from "../../types/tasks";

interface SubtaskChecklistProps {
  subtasks: TaskSubtask[];
  onToggle?: (subtaskId: string) => void;
  defaultOpen?: boolean;
}

export const SubtaskChecklist: React.FC<SubtaskChecklistProps> = ({
  subtasks,
  onToggle,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const doneCount = subtasks.filter((s) => s.done).length;
  const percent = subtasks.length > 0 ? Math.round((doneCount / subtasks.length) * 100) : 0;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className="mb-1 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wide text-gray-400">
        <span>Sub-Tasks: {subtasks.length}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full rounded-full bg-emerald-500" style={{ width: `${percent}%` }} />
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Collapse subtasks" : "Expand subtasks"}
        className="mx-auto mt-1 flex h-5 w-5 items-center justify-center text-gray-300 hover:text-gray-500"
      >
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="mt-1 divide-y divide-gray-50 rounded-lg border border-gray-100">
          {subtasks.map((subtask) => (
            <button
              key={subtask.id}
              type="button"
              onClick={() => onToggle?.(subtask.id)}
              className="flex w-full items-center justify-between px-3 py-2 text-left text-xs text-gray-600 hover:bg-gray-50"
            >
              <span>{subtask.title}</span>
              {subtask.done ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              ) : (
                <Circle className="h-4 w-4 text-gray-300" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubtaskChecklist;