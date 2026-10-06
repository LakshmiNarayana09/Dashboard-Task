import React from "react";
import { Search, ChevronDown } from "lucide-react";
import type { MailMessage } from "../../types/mail";
import { MailListItem } from "./MailListItem";

interface MailListProps {
  messages: MailMessage[];
  selectedId: string | null;
  onSelect: (message: MailMessage) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export const MailList: React.FC<MailListProps> = ({
  messages,
  selectedId,
  onSelect,
  searchValue,
  onSearchChange,
}) => {
  return (
    <div className="flex w-80 shrink-0 flex-col border-r border-gray-100 bg-white">
      <div className="flex items-center gap-2 border-b border-gray-100 p-3">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </div>
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          Recent
          <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <MailListItem
            key={message.id}
            message={message}
            isActive={message.id === selectedId}
            onClick={() => onSelect(message)}
          />
        ))}
        {messages.length === 0 && (
          <p className="px-4 py-8 text-center text-sm text-gray-400">No messages</p>
        )}
      </div>
    </div>
  );
};

export default MailList;