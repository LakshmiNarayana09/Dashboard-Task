import React, { useState } from "react";
import { X, Check } from "lucide-react";
import type { NewLabelFormValues } from "../../types/mail";
import { LABEL_COLOR_OPTIONS } from "../../data/mockMailData";

interface NewLabelPanelProps {
  onClose: () => void;
  onCreate: (values: NewLabelFormValues) => void;
}

export const NewLabelPanel: React.FC<NewLabelPanelProps> = ({ onClose, onCreate }) => {
  const [name, setName] = useState("");
  const [colorClass, setColorClass] = useState(LABEL_COLOR_OPTIONS[0]);

  const handleCreate = () => {
    if (!name.trim()) return;
    onCreate({ name: name.trim(), colorClass });
    setName("");
    setColorClass(LABEL_COLOR_OPTIONS[0]);
  };

  return (
    <div className="flex w-80 shrink-0 flex-col border-r border-gray-100 bg-white">
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <h2 className="text-xl font-semibold text-gray-900">New Label</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 space-y-5 px-5 py-5">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Personal"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium text-gray-500">Color</label>
          <div className="grid grid-cols-6 gap-3">
            {LABEL_COLOR_OPTIONS.map((color) => {
              const isSelected = color === colorClass;
              return (
                <button
                  key={color}
                  type="button"
                  onClick={() => setColorClass(color)}
                  aria-label={`Select color ${color}`}
                  className={`flex h-7 w-7 items-center justify-center rounded-full ${color} ${
                    isSelected ? "ring-2 ring-offset-2 ring-gray-300" : ""
                  }`}
                >
                  {isSelected && <Check className="h-3.5 w-3.5 text-white" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <button
          type="button"
          onClick={handleCreate}
          className="w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-medium text-white hover:bg-emerald-600"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default NewLabelPanel;