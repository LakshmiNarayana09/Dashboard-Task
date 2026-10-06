
import { useMemo, useState } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectTabs from "./ProjectTabs";
import ProjectGrid from "./ProjectGrid";
import FilterPopover from "./FilterPopover";
import AddProjectModal from "./AddProjectModal";
import type { Project } from "../../types/projects";
import ProjectDetailsModal from "./ProjectDetailsModal";

import { projectData } from "../../data/mockProjectsData";

interface FilterValues {
  search: string;
  member: string;
  dueDate: string;
  status: string;
}

const initialFilters: FilterValues = {
  search: "",
  member: "",
  dueDate: "",
  status: "",
};

function ProjectsPage() {

  const [showFilter, setShowFilter] = useState(false);

  const [showAddProject, setShowAddProject] = useState(false);

  const [filters, setFilters] = useState<FilterValues>(initialFilters);

  const [projects, setProjects] = useState(projectData);

  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  const allMembers = useMemo(() => {
    const members = projects.flatMap(
      (project) => project.members
    );

    return [...new Set(members)];
  }, [projects]);


  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchMatch =
        !filters.search ||
        project.name
          .toLowerCase()
          .includes(
            filters.search.toLowerCase()
          ) ||
        project.company
          .toLowerCase()
          .includes(
            filters.search.toLowerCase()
          );

      const memberMatch =
        !filters.member ||
        project.members.includes(
          filters.member
        );

      const dueDateMatch =
        !filters.dueDate ||
        project.deadline.includes(
          filters.dueDate
        );

      const statusMatch =
        !filters.status ||
        project.status === filters.status;

      return (
        searchMatch &&
        memberMatch &&
        dueDateMatch &&
        statusMatch
      );
    });
  }, [projects, filters]);

  const handleDeleteProject = (
    projectId: number
  ) => {
    setProjects((previous) =>
      previous.filter(
        (project) => project.id !== projectId
      )
    );
  };

  const handleApplyFilters = (
    newFilters: FilterValues
  ) => {
    setFilters(newFilters);
    setShowFilter(false);
  };

  const handleCreateProject = (project: {
    name: string;
    client: string;
    description: string;
    startDate: string;
    endDate: string;
    member: string;
    budget: string;
  }) => {
    const newProject: Project = {
      id: Date.now(),

      name: project.name,
      company: project.client,
      description: project.description,

      progress: 0,

      deadline: "1 week left",
      deadlineType: "normal",

      status: "Started",

      icon: project.name
        .charAt(0)
        .toUpperCase(),

      iconBg: "bg-green-50",
      iconColor: "text-green-600",

      avatars: project.member
        ? [
            project.member
              .split(" ")
              .map((name) =>
                name.charAt(0)
              )
              .join("")
              .slice(0, 2)
              .toUpperCase(),
          ]
        : [],

      members: project.member
        ? [project.member]
        : [],
    };

    setProjects((previousProjects) => [
      newProject,
      ...previousProjects,
    ]);

    setShowAddProject(false);
    setEditingProject(null);
  };
  const handleEditProject = (
    project: Project
  ) => {
    setEditingProject(project);
    setShowAddProject(true);
  };

  const handleCloseProjectModal = () => {
    setShowAddProject(false);
    setEditingProject(null);
  };

  const handleUpdateProject = (
    projectId: number,
    updatedData: {
      name: string;
      client: string;
      description: string;
      startDate: string;
      endDate: string;
      member: string;
      budget: string;
    }
  ) => {
    setProjects((previousProjects) =>
      previousProjects.map((project) => {
        if (project.id !== projectId) {
          return project;
        }

        return {
          ...project,

          name: updatedData.name,
          company: updatedData.client,
          description: updatedData.description,

          members: updatedData.member
            ? [updatedData.member]
            : [],

          avatars: updatedData.member
            ? [
                updatedData.member
                  .split(" ")
                  .map((name) =>
                    name.charAt(0)
                  )
                  .join("")
                  .slice(0, 2)
                  .toUpperCase(),
              ]
            : [],
        };
      })
    );

    setShowAddProject(false);
    setEditingProject(null);
  };

  const handleProjectClick = (
    project: Project
  ) => {
    setSelectedProject(project);
  };

  const handleCloseProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <main className="min-h-full bg-[#f7f8fa] p-4 md:p-6">

      <div className="relative">
        <ProjectHeader
          onFilterClick={() =>
            setShowFilter(
              (previous) => !previous
            )
          }
          onAddProject={() =>
            setShowAddProject(true)
          }
        />

        {showFilter && (
          <FilterPopover
            filters={filters}
            onApply={handleApplyFilters}
            onClose={() =>
              setShowFilter(false)
            }
            members={allMembers}
          />
        )}
      </div>

      <ProjectTabs />

      {filteredProjects.length > 0 ? (
        <ProjectGrid
          projects={filteredProjects}
          onDelete={handleDeleteProject}
          onEdit={handleEditProject}
          onProjectClick={handleProjectClick}
        />
      ) : (
        <div className="rounded-lg bg-white py-16 text-center">
          <p className="text-sm font-medium text-gray-500">
            No projects found
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Try changing your filters.
          </p>
        </div>
      )}

      
      <AddProjectModal
        isOpen={showAddProject}
        onClose={handleCloseProjectModal}
        onCreate={handleCreateProject}
        onUpdate={handleUpdateProject}
        editingProject={editingProject}
      />

      <ProjectDetailsModal
        isOpen={selectedProject !== null}
        project={selectedProject}
        onClose={handleCloseProjectDetails}
      />

    </main>
  );
}

export default ProjectsPage;