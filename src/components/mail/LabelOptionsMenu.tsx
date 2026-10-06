import React from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { LABEL_COLOR_OPTIONS } from "../../data/mockMailData";

interface LabelOptionsMenuProps {
  rect: DOMRect;
  currentColor: string;
  onClose: () => void;
  onEdit: () => void;
  onAddSublabel: () => void;
  onDelete: () => void;
  onColorChange: (colorClass: string) => void;
}

export const LabelOptionsMenu: React.FC<LabelOptionsMenuProps> = ({
  rect,
  currentColor,
  onClose,
  onEdit,
  onAddSublabel,
  onDelete,
  onColorChange,
}) => {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div
        className="fixed z-50 w-48 rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg"
        style={{ top: rect.bottom + 6, left: rect.left }}
      >
        <button
          type="button"
          onClick={() => {
            onEdit();
            onClose();
          }}
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
        >
          <Pencil className="h-3.5 w-3.5 text-gray-400" />
          Edit
        </button>
        <button
          type="button"
          onClick={() => {
            onAddSublabel();
            onClose();
          }}
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
        >
          <Plus className="h-3.5 w-3.5 text-gray-400" />
          Add Sublabel
        </button>
        <button
          type="button"
          onClick={() => {
            onDelete();
            onClose();
          }}
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-red-500 hover:bg-red-50"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Delete Label
        </button>

        <div className="mt-1 grid grid-cols-5 gap-2 border-t border-gray-100 px-2 pt-2">
          {LABEL_COLOR_OPTIONS.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => {
                onColorChange(color);
                onClose();
              }}
              aria-label={`Set color ${color}`}
              className={`h-5 w-5 rounded-full ${color} ${
                color === currentColor ? "ring-2 ring-offset-1 ring-gray-300" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LabelOptionsMenu;