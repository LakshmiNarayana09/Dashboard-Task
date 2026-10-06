import React, { useState } from "react";
import { MoreHorizontal, Plus } from "lucide-react";
import type { TaskCardData, TaskColumnMeta } from "../../types/tasks";
import { TaskCard } from "./TaskCard";
import { ColumnOptionsMenu } from "./ColumnOptionsMenu";

interface TaskColumnProps {
  column: TaskColumnMeta;
  tasks: TaskCardData[];
  onAddTask: (columnKey: TaskColumnMeta["key"]) => void;
  onCardClick?: (task: TaskCardData) => void;
  onCardMenuClick?: (task: TaskCardData) => void;
  onSubtaskToggle?: (taskId: string, subtaskId: string) => void;
  onColumnColorChange?: (columnKey: TaskColumnMeta["key"], colorClass: string) => void;
  onCompleteAllTasks?: (columnKey: TaskColumnMeta["key"]) => void;
  onArchiveAllTasks?: (columnKey: TaskColumnMeta["key"]) => void;
  onDeleteAllTasks?: (columnKey: TaskColumnMeta["key"]) => void;
}

export const TaskColumn: React.FC<TaskColumnProps> = ({
  column,
  tasks,
  onAddTask,
  onCardClick,
  onCardMenuClick,
  onSubtaskToggle,
  onColumnColorChange,
  onCompleteAllTasks,
  onArchiveAllTasks,
  onDeleteAllTasks,
}) => {
  const [menuRect, setMenuRect] = useState<DOMRect | null>(null);

  return (
    <div className="flex min-w-[320px] flex-1 flex-col rounded-2xl bg-white p-3 shadow-sm">
      <div className={`mb-3 h-1 w-10 rounded-full ${column.accentClass}`} />

      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
            {column.label}
          </h2>
          <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gray-100 px-1.5 text-xs font-medium text-gray-500">
            {tasks.length}
          </span>
        </div>
        <button
          type="button"
          onClick={(e) => setMenuRect(e.currentTarget.getBoundingClientRect())}
          aria-label="Column options"
          className="rounded-md p-1 text-gray-300 hover:bg-gray-100 hover:text-gray-500"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={onCardClick}
            onMenuClick={onCardMenuClick}
            onSubtaskToggle={onSubtaskToggle}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => onAddTask(column.key)}
        aria-label={`Add task to ${column.label}`}
        className="mt-3 flex h-9 w-9 items-center justify-center self-center rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
      >
        <Plus className="h-4 w-4" />
      </button>

      {menuRect && (
        <ColumnOptionsMenu
          rect={menuRect}
          currentColor={column.accentClass}
          onClose={() => setMenuRect(null)}
          onMove={() => console.log("Move column", column.key)}
          onSortTasks={() => console.log("Sort tasks in", column.key)}
          onCompleteTasks={() => onCompleteAllTasks?.(column.key)}
          onArchiveTasks={() => onArchiveAllTasks?.(column.key)}
          onDeleteTasks={() => onDeleteAllTasks?.(column.key)}
          onColorChange={(color) => onColumnColorChange?.(column.key, color)}
        />
      )}
    </div>
  );
};

export default TaskColumn;