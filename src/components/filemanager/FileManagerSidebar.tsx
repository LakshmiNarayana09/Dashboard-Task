import React from "react";
import { Trash2 } from "lucide-react";
import { SIDEBAR_SECTIONS, TRASH_SECTION, STORAGE_USED_PERCENT } from "../../data/mockFileManagerData";
import { FolderTreeNode } from "./FolderTreeNode";
import { StorageMeter } from "./StorageMeter";

interface FileManagerSidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export const FileManagerSidebar: React.FC<FileManagerSidebarProps> = ({ activeId, onSelect }) => {
  return (
    <div className="flex w-60 shrink-0 flex-col border-r border-gray-100 bg-white p-4">
      <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Folders</p>

      <nav className="flex-1 space-y-1 overflow-y-auto">
        {SIDEBAR_SECTIONS.map((section) => (
          <FolderTreeNode key={section.id} section={section} activeId={activeId} onSelect={onSelect} />
        ))}

        <button
          type="button"
          onClick={() => onSelect(TRASH_SECTION.id)}
          className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition-colors ${
            activeId === TRASH_SECTION.id ? "bg-[#dff8d7] font-medium text-[#159447]" : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Trash2 className="h-4 w-4" strokeWidth={1.8} />
          Trash
        </button>
      </nav>

      <StorageMeter percentUsed={STORAGE_USED_PERCENT} />
    </div>
  );
};

export default FileManagerSidebar;