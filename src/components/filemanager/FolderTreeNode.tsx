import React, { useState } from "react";
import { Folder, ChevronRight, Music2, Image as ImageIcon, FileText, Download, Trash2 } from "lucide-react";
import type { SidebarSection } from "../../types/fileManager";

interface FolderTreeNodeProps {
  section: SidebarSection;
  activeId: string;
  onSelect: (id: string) => void;
}

const ICONS: Record<SidebarSection["icon"], React.ElementType> = {
  folder: Folder,
  music: Music2,
  image: ImageIcon,
  doc: FileText,
  download: Download,
  trash: Trash2,
};

export const FolderTreeNode: React.FC<FolderTreeNodeProps> = ({ section, activeId, onSelect }) => {
  const [isOpen, setIsOpen] = useState(section.id === "projects");
  const Icon = ICONS[section.icon];
  const hasChildren = !!section.children && section.children.length > 0;
  const isActive = section.id === activeId;

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          onSelect(section.id);
          if (hasChildren) setIsOpen((v) => !v);
        }}
        className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition-colors ${
          isActive ? "bg-[#dff8d7] font-medium text-[#159447]" : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        <Icon className="h-4 w-4 shrink-0" strokeWidth={1.8} />
        <span className="flex-1 truncate">{section.name}</span>
        {hasChildren && (
          <ChevronRight className={`h-3.5 w-3.5 shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-90" : ""}`} />
        )}
      </button>

      {hasChildren && isOpen && (
        <div className="ml-4 mt-1 space-y-0.5 border-l border-gray-100 pl-3">
          {section.children!.map((child) => (
            <button
              key={child.id}
              type="button"
              onClick={() => onSelect(child.id)}
              className={`block w-full rounded-lg px-2 py-1.5 text-left text-xs transition-colors ${
                child.id === activeId
                  ? "bg-[#dff8d7] font-medium text-[#159447]"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {child.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderTreeNode;