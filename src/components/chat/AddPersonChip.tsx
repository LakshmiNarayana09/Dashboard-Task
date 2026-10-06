import React from "react";
import { X } from "lucide-react";
import type { ChatConversation } from "../../types/chat";

interface AddPersonChipProps {
  person: ChatConversation;
  onRemove: () => void;
}

export const AddPersonChip: React.FC<AddPersonChipProps> = ({ person, onRemove }) => {
  return (
    <span className="flex items-center gap-1.5 rounded-full bg-gray-100 py-1 pl-1 pr-2 text-xs font-medium text-gray-700">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-200 text-[9px] font-semibold text-emerald-800">
        {person.name.charAt(0)}
      </span>
      {person.name}
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${person.name}`}
        className="text-gray-400 hover:text-gray-600"
      >
        <X className="h-3 w-3" />
      </button>
    </span>
  );
};

export default AddPersonChip;