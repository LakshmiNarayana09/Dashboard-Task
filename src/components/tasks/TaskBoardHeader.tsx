import React, { useState } from "react";
import { ChevronDown, SlidersHorizontal, Plus } from "lucide-react";
import type { TaskProject } from "../../types/tasks";
import { TASK_PROJECTS } from "../../data/mockTasksData";
import { ProjectSwitcherMenu } from "./ProjectSwitcherMenu";
import { AddMenu, type AddMenuAction } from "./AddMenu";

interface TaskBoardHeaderProps {
  boardName: string;
  onBoardChange: (project: TaskProject) => void;
  onAddAction: (action: AddMenuAction) => void;
  onFilterClick: () => void;
}

export const TaskBoardHeader: React.FC<TaskBoardHeaderProps> = ({
  boardName,
  onBoardChange,
  onAddAction,
  onFilterClick,
}) => {
  const [projectMenuRect, setProjectMenuRect] = useState<DOMRect | null>(null);
  const [addMenuRect, setAddMenuRect] = useState<DOMRect | null>(null);

  const activeProject = TASK_PROJECTS.find((p) => p.name === boardName);

  return (
    <div className="mb-5 flex items-center justify-between">
      <button
        type="button"
        onClick={(e) => setProjectMenuRect(e.currentTarget.getBoundingClientRect())}
        className="flex items-center gap-1.5 text-2xl font-semibold text-gray-900"
      >
        {boardName}
        <ChevronDown className="h-5 w-5 text-gray-400" />
      </button>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onFilterClick}
          aria-label="Filters"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={(e) => setAddMenuRect(e.currentTarget.getBoundingClientRect())}
          className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
        >
          <Plus className="h-4 w-4" />
          Add
          <ChevronDown className="h-3.5 w-3.5 opacity-80" />
        </button>
      </div>

      {projectMenuRect && (
        <ProjectSwitcherMenu
          rect={projectMenuRect}
          projects={TASK_PROJECTS}
          activeProjectId={activeProject?.id ?? ""}
          onClose={() => setProjectMenuRect(null)}
          onSelect={onBoardChange}
        />
      )}

      {addMenuRect && (
        <AddMenu
          rect={addMenuRect}
          onClose={() => setAddMenuRect(null)}
          onSelect={onAddAction}
        />
      )}
    </div>
  );
};

export default TaskBoardHeader;