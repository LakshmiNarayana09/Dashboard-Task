import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import type { MailLabel } from "../../types/mail";
import { LabelOptionsMenu } from "./LabelOptionsMenu";

interface LabelRowProps {
  label: MailLabel;
  onRename: (key: string, name: string) => void;
  onDelete: (key: string) => void;
  onColorChange: (key: string, colorClass: string) => void;
  onAddSublabel: (key: string) => void;
}

export const LabelRow: React.FC<LabelRowProps> = ({
  label,
  onRename,
  onDelete,
  onColorChange,
  onAddSublabel,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState(label.label);
  const [menuRect, setMenuRect] = useState<DOMRect | null>(null);

  const commitRename = () => {
    const trimmed = draftName.trim();
    if (trimmed && trimmed !== label.label) {
      onRename(label.key, trimmed);
    } else {
      setDraftName(label.label);
    }
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2.5 rounded-lg px-3 py-1.5">
        <span className={`h-2 w-2 shrink-0 rounded-full ${label.colorClass}`} />
        <input
          autoFocus
          type="text"
          value={draftName}
          onChange={(e) => setDraftName(e.target.value)}
          onBlur={commitRename}
          onKeyDown={(e) => {
            if (e.key === "Enter") commitRename();
            if (e.key === "Escape") {
              setDraftName(label.label);
              setIsEditing(false);
            }
          }}
          className="w-full border-b border-emerald-400 bg-transparent text-sm text-gray-700 focus:outline-none"
        />
      </div>
    );
  }

  return (
    <div className="group flex items-center gap-1 rounded-lg px-1 hover:bg-gray-50">
      <button
        type="button"
        className="flex flex-1 items-center gap-2.5 px-2 py-1.5 text-left text-sm text-gray-600"
      >
        <span className={`h-2 w-2 shrink-0 rounded-full ${label.colorClass}`} />
        {label.label}
      </button>
      <button
        type="button"
        onClick={(e) => setMenuRect(e.currentTarget.getBoundingClientRect())}
        aria-label={`Options for ${label.label}`}
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-300 opacity-0 hover:bg-gray-100 hover:text-gray-500 group-hover:opacity-100"
      >
        <MoreHorizontal className="h-3.5 w-3.5" />
      </button>

      {menuRect && (
        <LabelOptionsMenu
          rect={menuRect}
          currentColor={label.colorClass}
          onClose={() => setMenuRect(null)}
          onEdit={() => setIsEditing(true)}
          onAddSublabel={() => onAddSublabel(label.key)}
          onDelete={() => onDelete(label.key)}
          onColorChange={(color) => onColorChange(label.key, color)}
        />
      )}
    </div>
  );
};

export default LabelRow;