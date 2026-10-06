import React from "react";
import type { TaskLabelTag } from "../../types/tasks";

interface TaskLabelsRowProps {
  labels: TaskLabelTag[];
}

export const TaskLabelsRow: React.FC<TaskLabelsRowProps> = ({ labels }) => {
  if (labels.length === 0) return null;

  return (
    <div>
      <p className="mb-1.5 text-xs font-medium text-gray-500">Labels</p>
      <div className="flex flex-wrap gap-1.5">
        {labels.map((label) => (
          <span
            key={label.id}
            className={`rounded-full px-2.5 py-1 text-xs font-medium text-white ${label.colorClass}`}
          >
            {label.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TaskLabelsRow;