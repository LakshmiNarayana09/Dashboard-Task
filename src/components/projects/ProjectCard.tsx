import { Clock3, MoreHorizontal } from "lucide-react";
import { useState } from "react";

import type { Project } from "../../types/projects";
import ProjectAvatar from "./ProjectAvatar";
import ProjectActionPopover from "./ProjectActionPopover";

interface ProjectCardProps {
  project: Project;
  onDelete: (id: number) => void;
  onEdit: (project: Project) => void;
  onProjectClick: (project: Project) => void;
}

function ProjectCard({
  project,
  onDelete,
  onEdit,
  onProjectClick,
}: ProjectCardProps) {
  const [showActions, setShowActions] = useState(false);

  const handleEdit = () => {
    setShowActions(false);
    onEdit(project);
  };

  const handleAddMember = () => {
    setShowActions(false);

    console.log("Add member to project:", project.id);
  };

  const handleAddDueDate = () => {
    setShowActions(false);

    console.log("Add due date to project:", project.id);
  };

  const handleDelete = () => {
    setShowActions(false);
    onDelete(project.id);
  };

  return (
    <div
      onClick={() => onProjectClick(project)}
      className="rounded-sm bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer">
      
      <div className="flex items-start justify-between">
        <div className="flex min-w-0 items-center gap-3">
          
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${project.iconBg} ${project.iconColor}`}
          >
            {project.icon}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-[14px] font-semibold text-gray-700">
              {project.name}
            </h3>

            <p className="mt-0.5 truncate text-[11px] text-gray-400">
              {project.company}
            </p>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();

              setShowActions((previous) => !previous);
            }}
            className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <MoreHorizontal size={17} />
          </button>

          {showActions && (
            <div
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <ProjectActionPopover
                onEdit={handleEdit}
                onAddMember={handleAddMember}
                onAddDueDate={handleAddDueDate}
                onDelete={handleDelete}
              />
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 min-h-[38px] text-[11px] leading-4 text-gray-500">
        {project.description}
      </p>

      <div className="mt-4">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[11px] text-gray-500">
            Progress
          </span>

          <span className="text-[11px] text-gray-400">
            {project.progress}%
          </span>
        </div>

        <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-green-500"
            style={{
              width: `${project.progress}%`,
            }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        
        <div
          className={`
            flex items-center gap-1
            rounded-full
            px-2 py-1
            text-[10px]
            ${
              project.deadlineType === "urgent"
                ? "bg-orange-50 text-orange-500"
                : "bg-gray-50 text-gray-500"
            }
          `}
        >
          <Clock3 size={11} />
          <span>{project.deadline}</span>
        </div>

        <div className="flex -space-x-2">
          {project.avatars.map((avatar, index) => (
            <ProjectAvatar
              key={`${project.id}-${avatar}`}
              initials={avatar}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;