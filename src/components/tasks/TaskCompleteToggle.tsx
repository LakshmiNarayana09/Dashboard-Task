import React from "react";
import { Check } from "lucide-react";

interface TaskCompleteToggleProps {
  completed: boolean;
  onToggle: () => void;
}

export const TaskCompleteToggle: React.FC<TaskCompleteToggleProps> = ({ completed, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
        completed ? "bg-emerald-500 text-white" : "border border-gray-200 text-gray-500 hover:bg-gray-50"
      }`}
    >
      <Check className="h-3.5 w-3.5" />
      {completed ? "Completed" : "Complete"}
    </button>
  );
};

export default TaskCompleteToggle;