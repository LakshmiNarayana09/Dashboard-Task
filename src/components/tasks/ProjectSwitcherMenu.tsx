import React, { useState } from "react";
import { Search, Check } from "lucide-react";
import type { TaskProject } from "../../types/tasks";

interface ProjectSwitcherMenuProps {
  rect: DOMRect;
  projects: TaskProject[];
  activeProjectId: string;
  onClose: () => void;
  onSelect: (project: TaskProject) => void;
}

export const ProjectSwitcherMenu: React.FC<ProjectSwitcherMenuProps> = ({
  rect,
  projects,
  activeProjectId,
  onClose,
  onSelect,
}) => {
  const [search, setSearch] = useState("");
  const filtered = projects.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div
        className="fixed z-50 w-64 rounded-xl border border-gray-100 bg-white p-2 shadow-lg"
        style={{ top: rect.bottom + 6, left: rect.left }}
      >
        <p className="px-2 pb-2 pt-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
          Projects
        </p>

        <div className="relative mb-2 px-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Project..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-1.5 pl-8 pr-3 text-xs text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </div>

        <div className="max-h-56 space-y-0.5 overflow-y-auto">
          {filtered.map((project) => {
            const isActive = project.id === activeProjectId;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => {
                  onSelect(project);
                  onClose();
                }}
                className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
              >
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-4 rounded-full bg-emerald-400" />
                  {project.name}
                </span>
                {isActive && <Check className="h-4 w-4 text-emerald-500" />}
              </button>
            );
          })}
          {filtered.length === 0 && (
            <p className="px-2 py-3 text-center text-xs text-gray-400">No projects found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectSwitcherMenu;