import { SlidersHorizontal } from "lucide-react";

interface ProjectHeaderProps {
  onFilterClick: () => void;
  onAddProject: () => void;
}

function ProjectHeader({
  onFilterClick,
  onAddProject,
}: ProjectHeaderProps) {
  return (
    <div className="flex items-center justify-between">

      
      <h1 className="text-xl font-semibold text-gray-700">
        Projects
      </h1>

      
      <div className="flex items-center gap-3">

        
        <button
          type="button"
          onClick={onFilterClick}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <SlidersHorizontal size={15} />
        </button>

        
        <button
          type="button"
          onClick={onAddProject}
          className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-[11px] font-medium text-white shadow-sm transition hover:bg-green-700"
        >
          <span className="text-base leading-none">
            +
          </span>

          Add Project
        </button>
      </div>
    </div>
  );
}

export default ProjectHeader;