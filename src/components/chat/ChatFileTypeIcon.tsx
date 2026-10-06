import React from "react";
import { FileType, FileText } from "lucide-react";
import type { ChatFileKind } from "../../types/chat";

interface ChatFileTypeIconProps {
  kind: ChatFileKind;
}

const STYLES: Record<ChatFileKind, { bg: string; text: string; label?: string }> = {
  pdf: { bg: "bg-gray-50", text: "text-red-500" },
  photoshop: { bg: "bg-sky-600", text: "text-white", label: "Ps" },
  figma: { bg: "bg-gray-50", text: "text-gray-700" },
  sketch: { bg: "bg-amber-50", text: "text-amber-600" },
  word: { bg: "bg-blue-500", text: "text-white", label: "W" },
  other: { bg: "bg-gray-50", text: "text-gray-400" },
};

export const ChatFileTypeIcon: React.FC<ChatFileTypeIconProps> = ({ kind }) => {
  const style = STYLES[kind];

  if (style.label) {
    return (
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${style.bg} ${style.text}`}>
        {style.label}
      </span>
    );
  }

  const Icon = kind === "pdf" ? FileType : FileText;

  return (
    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${style.bg} ${style.text}`}>
      <Icon className="h-4 w-4" />
    </span>
  );
};

export default ChatFileTypeIcon;