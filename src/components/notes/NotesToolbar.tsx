import React from "react";
import { SlidersHorizontal, Plus } from "lucide-react";

interface NotesToolbarProps {
  onFilterClick?: () => void;
  onAddNote?: () => void;
}

export const NotesToolbar: React.FC<NotesToolbarProps> = ({ onFilterClick, onAddNote }) => {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-900">Notes</h1>
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
          onClick={onAddNote}
          className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
        >
          <Plus className="h-4 w-4" />
          Add Note
        </button>
      </div>
    </div>
  );
};

export default NotesToolbar;