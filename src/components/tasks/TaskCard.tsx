import React from "react";
import { MoreHorizontal, CalendarDays, Paperclip, MessageSquare } from "lucide-react";
import type { TaskCardData } from "../../types/tasks";
import { TaskAssigneeStack } from "./TaskAssigneeStack";
import { SubtaskChecklist } from "./SubTaskChecklist";

interface TaskCardProps {
  task: TaskCardData;
  onClick?: (task: TaskCardData) => void;
  onMenuClick?: (task: TaskCardData) => void;
  onSubtaskToggle?: (taskId: string, subtaskId: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onClick, onMenuClick, onSubtaskToggle }) => {
  return (
    <button
      type="button"
      onClick={() => onClick?.(task)}
      className="w-full rounded-xl border border-gray-100 bg-white p-3 text-left shadow-sm hover:shadow-md"
    >
      
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {task.labelColors.map((color, i) => (
            <span key={i} className={`h-1.5 w-6 rounded-full ${color}`} />
          ))}
        </div>
        <span className="flex items-center gap-1 rounded-md bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-500">
          <CalendarDays className="h-3 w-3" />
          {task.dueDate}
        </span>
      </div>

      
      <div className="mb-1 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-gray-900">{task.title}</h3>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onMenuClick?.(task);
          }}
          aria-label="Task options"
          className="shrink-0 rounded-md p-0.5 text-gray-300 hover:bg-gray-100 hover:text-gray-500"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {task.description && (
        <p className="mb-2 line-clamp-2 text-xs text-gray-500">{task.description}</p>
      )}

      {task.images && task.images.length > 0 && (
        <div className={`mb-2 grid gap-1 ${task.images.length > 1 ? "grid-cols-3" : "grid-cols-1"}`}>
          {task.images.map((imgUrl, i) => (
            <img
              key={i}
              src={imgUrl}
              alt=""
              className={`w-full rounded-lg object-cover ${task.images!.length > 1 ? "h-14" : "h-28"}`}
            />
          ))}
        </div>
      )}

      {task.subtasks && task.subtasks.length > 0 && (
        <div className="mb-2">
          <SubtaskChecklist
            subtasks={task.subtasks}
            onToggle={(subtaskId) => onSubtaskToggle?.(task.id, subtaskId)}
          />
        </div>
      )}

      
      <div className="mt-2 flex items-center justify-between border-t border-gray-50 pt-2">
        <div className="flex items-center gap-3 text-xs text-gray-400">
          {!!task.attachmentsCount && (
            <span className="flex items-center gap-1">
              <Paperclip className="h-3.5 w-3.5" />
              {task.attachmentsCount}
            </span>
          )}
          {!!task.commentsCount && (
            <span className="flex items-center gap-1">
              <MessageSquare className="h-3.5 w-3.5" />
              {task.commentsCount}
            </span>
          )}
        </div>
        <TaskAssigneeStack assignees={task.assignees} />
      </div>
    </button>
  );
};

export default TaskCard;