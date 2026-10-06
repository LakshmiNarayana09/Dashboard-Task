import { useEffect, useState } from "react";
import { CalendarDays, ImagePlus, Search, X, } from "lucide-react";
import type { Project } from "../../types/projects";

interface ProjectFormData {
  name: string;
  client: string;
  description: string;
  startDate: string;
  endDate: string;
  member: string;
  budget: string;
}

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;

  onCreate: (project: ProjectFormData) => void;

  onUpdate: (
    projectId: number,
    project: ProjectFormData
  ) => void;

  editingProject?: Project | null;
}

function AddProjectModal({
  isOpen,
  onClose,
  onCreate,
  onUpdate,
  editingProject,
}: AddProjectModalProps) {
  const isEditMode = Boolean(editingProject);

  const [projectName, setProjectName] = useState("");
  const [clientName, setClientName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [member, setMember] = useState("");
  const [budget, setBudget] = useState("");


  useEffect(() => {
    if (editingProject) {
      setProjectName(editingProject.name);
      setClientName(editingProject.company);
      setDescription(editingProject.description);

      setMember(
        editingProject.members?.[0] ?? ""
      );

      setStartDate("");
      setEndDate("");
      setStartTime("00:00");
      setEndTime("00:00");
      setBudget("");
    } else {
      setProjectName("");
      setClientName("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setStartTime("00:00");
      setEndTime("00:00");
      setMember("");
      setBudget("");
    }
  }, [editingProject, isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData: ProjectFormData = {
      name: projectName,
      client: clientName,
      description,
      startDate,
      endDate,
      member,
      budget,
    };

    if (isEditMode && editingProject) {
      onUpdate(
        editingProject.id,
        formData
      );
    } else {
      onCreate(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 p-4">
      <div className="relative max-h-[95vh] w-full max-w-[380px] overflow-y-auto rounded-lg bg-white shadow-2xl">
        <div className="flex items-center justify-between px-5 pt-4">
          <h2 className="text-[18px] font-semibold text-gray-700">
            {isEditMode
              ? "Edit Project"
              : "Add Project"}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100">
            <X size={13} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-5 pb-5">
          <div className="flex justify-center py-5">
            <button
              type="button"
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-dashed border-gray-300 text-gray-400 hover:border-green-400 hover:text-green-500">
              <ImagePlus size={20} />
            </button>
          </div>

          <div className="mb-4">
            <label className="mb-1.5 block text-[10px] text-gray-400">
              Project Name
            </label>

            <input
              type="text"
              value={projectName}
              onChange={(event) =>
                setProjectName(event.target.value)
              }
              className="h-9 w-full rounded-md border border-gray-200 px-3 text-[10px] text-gray-600 outline-none focus:border-green-400"/>
          </div>

          <div className="mb-4">
            <label className="mb-1.5 block text-[10px] text-gray-400">
              Client Name
            </label>

            <input
              type="text"
              value={clientName}
              onChange={(event) =>
                setClientName(event.target.value)
              }
              className="h-9 w-full rounded-md border border-gray-200 px-3 text-[10px] text-gray-600 outline-none focus:border-green-400"/>
          </div>

          <div className="mb-4">
            <label className="mb-1.5 block text-[10px] text-gray-400">
              Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              className="w-full resize-none rounded-md border border-gray-200 px-3 py-2 text-[10px] leading-4 text-gray-600 outline-none focus:border-green-400"/>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-[10px] text-gray-400">
                Start Date
              </label>

              <div className="flex gap-1">
                <input
                  type="text"
                  value={startTime}
                  onChange={(event) =>
                    setStartTime(event.target.value)
                  }
                  className="h-9 w-[48px] rounded-md border border-gray-200 px-1 text-center text-[9px] outline-none"
                />

                <div className="relative flex-1">
                  <CalendarDays
                    size={11}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={startDate}
                    onChange={(event) =>
                      setStartDate(
                        event.target.value
                      )
                    }
                    className="h-9 w-full rounded-md border border-gray-200 px-2 text-[9px] text-gray-600 outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-[10px] text-gray-400">
                End Date
              </label>

              <div className="flex gap-1">
                <input
                  type="text"
                  value={endTime}
                  onChange={(event) =>
                    setEndTime(event.target.value)
                  }
                  className="h-9 w-[48px] rounded-md border border-gray-200 px-1 text-center text-[9px] outline-none"
                />

                <div className="relative flex-1">
                  <CalendarDays
                    size={11}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={endDate}
                    onChange={(event) =>
                      setEndDate(
                        event.target.value
                      )
                    }
                    className="h-9 w-full rounded-md border border-gray-200 px-2 text-[9px] text-gray-600 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-1.5 block text-[10px] text-gray-400">
              Members
            </label>

            <div className="flex h-9 items-center rounded-md border border-gray-200 px-2">
              <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-200 text-[7px] font-semibold text-gray-600">
                {member
                  ? member
                      .split(" ")
                      .map((name) =>
                        name.charAt(0)
                      )
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()
                  : "?"}
              </div>

              <span className="flex-1 text-[9px] text-gray-600">
                {member || "Select member"}
              </span>

              {member && (
                <button
                  type="button"
                  onClick={() => setMember("")}
                  className="mr-2 text-[9px] text-gray-400"
                >
                  ×
                </button>
              )}

              <Search
                size={13}
                className="text-gray-400"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="mb-1.5 block text-[10px] text-gray-400">
              Budget
            </label>

            <div className="flex h-9 overflow-hidden rounded-md border border-gray-200">
              <div className="flex w-8 items-center justify-center border-r border-gray-200 text-[11px] text-gray-500">
                $
              </div>

              <input
                type="text"
                value={budget}
                onChange={(event) =>
                  setBudget(event.target.value)
                }
                className="min-w-0 flex-1 px-3 text-[10px] text-gray-600 outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-green-600 px-5 py-2 text-[10px] font-medium text-white transition hover:bg-green-700"
            >
              {isEditMode
                ? "Update"
                : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProjectModal;