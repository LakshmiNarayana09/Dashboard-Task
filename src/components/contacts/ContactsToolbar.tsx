import React from "react";
import { Search, SlidersHorizontal, ChevronDown, Plus } from "lucide-react";

interface ContactsToolbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onAddContact?: () => void;
}

export const ContactsToolbar: React.FC<ContactsToolbarProps> = ({
  searchValue,
  onSearchChange,
  onAddContact,
}) => {
  return (
    <div className="mb-4">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Contacts</h1>
        <button
          type="button"
          onClick={onAddContact}
          className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
        >
          <Plus className="h-4 w-4" />
          Add Contact
        </button>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search contact..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </div>
        <button
          type="button"
          className="flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-gray-50"
          aria-label="Filters"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          Actions
          <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default ContactsToolbar;