import React from "react";
import { Flag, MoreVertical } from "lucide-react";
import type { MailMessage } from "../../types/mail";

interface MailListItemProps {
  message: MailMessage;
  isActive: boolean;
  onClick: () => void;
}

export const MailListItem: React.FC<MailListItemProps> = ({ message, isActive, onClick }) => {
  const initials = message.senderName
    .split(" ")
    .map((p) => p.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-start gap-3 border-b border-gray-50 px-4 py-3 text-left transition-colors ${
        isActive ? "bg-emerald-50/60" : "hover:bg-gray-50"
      }`}
    >
      {message.avatar ? (
        <img src={message.avatar} alt={message.senderName} className="h-9 w-9 shrink-0 rounded-full object-cover" />
      ) : (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
          {initials}
        </span>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-sm font-medium text-gray-800">{message.senderName}</span>
          <span className="shrink-0 text-xs text-gray-400">{message.receivedAtLabel}</span>
        </div>
        <p className="truncate text-sm font-medium text-gray-700">{message.subject}</p>
        <p className="truncate text-xs text-gray-400">{message.preview}</p>
        {message.flagged && (
          <Flag className="mt-1 h-3 w-3 fill-red-400 text-red-400" />
        )}
      </div>

      <MoreVertical className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" />
    </button>
  );
};

export default MailListItem;