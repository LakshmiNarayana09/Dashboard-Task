import React, { useState } from "react";
import { Folder, Plus, ChevronLeft } from "lucide-react";
import type { FileManagerFolder } from "../../types/fileManager";
import { ItemContextMenu, type ContextMenuAction } from "./ItemContextMenu";

interface FolderCardProps {
  folder: FileManagerFolder;
  isActive: boolean;
  onClick: () => void;
  onAction?: (folder: FileManagerFolder, action: ContextMenuAction) => void;
}

export const FolderCard: React.FC<FolderCardProps> = ({ folder, isActive, onClick, onAction }) => {
  const [menuRect, setMenuRect] = useState<DOMRect | null>(null);

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={onClick}
        className={`flex w-full flex-col items-start gap-2 rounded-xl border p-4 text-left transition-colors ${
          isActive ? "border-emerald-300 bg-emerald-50/50" : "border-gray-100 bg-white hover:bg-gray-50"
        }`}
      >
        <Folder className="h-9 w-9 text-amber-400" fill="currentColor" fillOpacity={0.15} />
        <div>
          <p className="truncate text-sm font-medium text-gray-800">{folder.name}</p>
          <p className="text-xs text-gray-400">{folder.size}</p>
        </div>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setMenuRect(e.currentTarget.getBoundingClientRect());
        }}
        aria-label={`Options for ${folder.name}`}
        className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 opacity-0 shadow-sm hover:bg-gray-50 hover:text-gray-600 group-hover:opacity-100"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
      </button>

      {menuRect && (
        <ItemContextMenu
          rect={menuRect}
          onClose={() => setMenuRect(null)}
          onAction={(action) => onAction?.(folder, action)}
        />
      )}
    </div>
  );
};

export const AddFolderCard: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 p-4 text-gray-400 hover:border-emerald-300 hover:text-emerald-500"
  >
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
      <Plus className="h-4 w-4" />
    </span>
    <span className="text-xs font-medium">Add Folder</span>
  </button>
);

export default FolderCard;