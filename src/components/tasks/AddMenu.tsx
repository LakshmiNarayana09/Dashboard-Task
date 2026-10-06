import React from "react";
import { CheckSquare, Columns3, FolderPlus, UserPlus } from "lucide-react";

export type AddMenuAction = "task" | "board" | "project" | "invite";

interface AddMenuProps {
  rect: DOMRect;
  onClose: () => void;
  onSelect: (action: AddMenuAction) => void;
}

const ITEMS: { key: AddMenuAction; label: string; icon: React.ElementType }[] = [
  { key: "task", label: "Task", icon: CheckSquare },
  { key: "board", label: "Board", icon: Columns3 },
  { key: "project", label: "Project", icon: FolderPlus },
  { key: "invite", label: "Invite", icon: UserPlus },
];

export const AddMenu: React.FC<AddMenuProps> = ({ rect, onClose, onSelect }) => {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div
        className="fixed z-50 w-40 rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg"
        style={{ top: rect.bottom + 6, right: window.innerWidth - rect.right }}
      >
        {ITEMS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              onSelect(key);
              onClose();
            }}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
          >
            <Icon className="h-3.5 w-3.5 text-gray-400" />
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export default AddMenu;