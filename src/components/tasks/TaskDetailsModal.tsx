import React from "react";
import { X, MoreHorizontal } from "lucide-react";
import type {
  TaskCardData,
  TaskComment,
  TaskLabelTag,
  TaskAttachmentFile,
  TaskActivityEntry,
} from "../../types/tasks";
import { TaskAssigneeStack } from "./TaskAssigneeStack";
import { TaskCompleteToggle } from "./TaskCompleteToggle";
import { TaskLabelsRow } from "./TaskLabelsRow";
import { SubtaskChecklist } from "./SubTaskChecklist";
import { TaskAttachmentsSection } from "./TaskAttachmentsSection";
import { TaskCommentsPanel } from "./TaskCommentsPanel";

interface TaskDetailsModalProps {
  task: TaskCardData | null;
  labelOptions: TaskLabelTag[];
  attachments: TaskAttachmentFile[];
  comments: TaskComment[];
  activity: TaskActivityEntry[];
  onClose: () => void;
  onToggleComplete: (task: TaskCardData) => void;
  onSubtaskToggle: (taskId: string, subtaskId: string) => void;
  onAddComment: (taskId: string, text: string) => void;
}

export const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({
  task,
  labelOptions,
  attachments,
  comments,
  activity,
  onClose,
  onToggleComplete,
  onSubtaskToggle,
  onAddComment,
}) => {
  if (!task) return null;

  const taskLabels = labelOptions.filter((l) =>
    (task.labelIds ?? []).includes(l.id)
  );

  const isCompleted = task.column === "completed";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <TaskCompleteToggle
            completed={isCompleted}
            onToggle={() => onToggleComplete(task)}
          />

          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="More options"
              className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-semibold text-gray-900">
              {task.title}
            </h2>

            <TaskAssigneeStack assignees={task.assignees} />
          </div>

          <TaskLabelsRow labels={taskLabels} />

          <div>
            <p className="mb-1 text-xs font-medium text-gray-500">
              Due Date
            </p>
            <p className="text-sm text-gray-700">{task.dueDate}</p>
          </div>

          {task.description && (
            <div>
              <p className="mb-1 text-xs font-medium text-gray-500">
                Description
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                {task.description}
              </p>
            </div>
          )}

          {task.subtasks && task.subtasks.length > 0 && (
            <div>
              <SubtaskChecklist
                subtasks={task.subtasks}
                onToggle={(subtaskId) =>
                  onSubtaskToggle(task.id, subtaskId)
                }
                defaultOpen
              />
            </div>
          )}

          <TaskAttachmentsSection attachments={attachments} />

          <TaskCommentsPanel
            comments={comments}
            activity={activity}
            onAddComment={(text) => onAddComment(task.id, text)}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;