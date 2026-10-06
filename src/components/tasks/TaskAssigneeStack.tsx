import React from "react";
import type { TaskAssignee } from "../../types/tasks";

interface TaskAssigneeStackProps {
  assignees: TaskAssignee[];
  max?: number;
}

export const TaskAssigneeStack: React.FC<TaskAssigneeStackProps> = ({ assignees, max = 3 }) => {
  const visible = assignees.slice(0, max);
  const overflow = assignees.length - visible.length;

  return (
    <div className="flex items-center -space-x-2">
      {visible.map((person) =>
        person.avatar ? (
          <img
            key={person.id}
            src={person.avatar}
            alt={person.name}
            title={person.name}
            className="h-6 w-6 rounded-full border-2 border-white object-cover"
          />
        ) : (
          <span
            key={person.id}
            title={person.name}
            className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-[10px] font-semibold text-emerald-700"
          >
            {person.name.charAt(0)}
          </span>
        )
      )}
      {overflow > 0 && (
        <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-[10px] font-semibold text-gray-500">
          +{overflow}
        </span>
      )}
    </div>
  );
};

export default TaskAssigneeStack;