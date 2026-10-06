import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import type { FileManagerFile } from "../../types/fileManager";
import { FileTypeIcon } from "./FileTypeIcon";
import { ItemContextMenu, type ContextMenuAction } from "./ItemContextMenu";

interface FileCardProps {
  file: FileManagerFile;
  isActive?: boolean;
  onClick: () => void;
  onAction?: (file: FileManagerFile, action: ContextMenuAction) => void;
}

export const FileCard: React.FC<FileCardProps> = ({ file, isActive, onClick, onAction }) => {
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
        <FileTypeIcon kind={file.kind} />
        <div className="w-full">
          <p className="truncate text-sm font-medium text-gray-800">{file.name}</p>
          <p className="text-xs text-gray-400">{file.size}</p>
        </div>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setMenuRect(e.currentTarget.getBoundingClientRect());
        }}
        aria-label={`Options for ${file.name}`}
        className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 opacity-0 shadow-sm hover:bg-gray-50 hover:text-gray-600 group-hover:opacity-100"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
      </button>

      {menuRect && (
        <ItemContextMenu
          rect={menuRect}
          onClose={() => setMenuRect(null)}
          onAction={(action) => onAction?.(file, action)}
        />
      )}
    </div>
  );
};

export default FileCard;