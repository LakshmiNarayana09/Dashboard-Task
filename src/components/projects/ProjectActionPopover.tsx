import { CalendarPlus, Edit3, Trash2, UserPlus } from "lucide-react";

interface ProjectActionPopoverProps {
  onEdit: () => void;
  onAddMember: () => void;
  onAddDueDate: () => void;
  onDelete: () => void;
}

function ProjectActionPopover({
  onEdit,
  onAddMember,
  onAddDueDate,
  onDelete,
}: ProjectActionPopoverProps) {
  return (
    <div className="absolute right-0 top-7 z-40 w-[150px] overflow-hidden rounded-lg border border-gray-100 bg-white py-1 shadow-xl">
      
      <button
        type="button"
        onClick={onEdit}
        className="flex w-full items-center gap-3 px-3 py-2 text-left text-[10px] text-gray-600 hover:bg-gray-50">
        <Edit3 size={12} />
        Edit
      </button>

      
      <button
        type="button"
        onClick={onAddMember}
        className="flex w-full items-center gap-3 px-3 py-2 text-left text-[10px] text-gray-600 hover:bg-gray-50">
        <UserPlus size={12} />
        Add Member
      </button>

      <button
        type="button"
        onClick={onAddDueDate}
        className="flex w-full items-center gap-3 px-3 py-2 text-left text-[10px] text-gray-600 hover:bg-gray-50">
        <CalendarPlus size={12} />
        Add Due Date
      </button>

      <div className="my-1 border-t border-gray-100" />

      <button
        type="button"
        onClick={onDelete}
        className="flex w-full items-center gap-3 px-3 py-2 text-left text-[10px] text-red-500 hover:bg-red-50"
      >
        <Trash2 size={12} />
        Delete Project
      </button>
    </div>
  );
}

export default ProjectActionPopover;