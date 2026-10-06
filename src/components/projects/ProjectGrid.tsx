import type { Project } from "../../types/projects";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onDelete: (id: number) => void;
  onEdit: (project: Project) => void;
  onProjectClick: (project: Project) => void;
}

function ProjectGrid({
  projects,
  onDelete,
  onEdit,
  onProjectClick,
}: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDelete}
          onEdit={onEdit}
          onProjectClick={onProjectClick}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;