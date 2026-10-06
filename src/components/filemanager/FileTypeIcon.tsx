import React from "react";
import { FileText, Music2, Image as ImageIcon, FileType } from "lucide-react";
import type { FileKind } from "../../types/fileManager";

interface FileTypeIconProps {
  kind: FileKind;
}

const STYLES: Record<FileKind, { bg: string; text: string; label?: string }> = {
  figma: { bg: "bg-gray-50", text: "text-gray-700" },
  sketch: { bg: "bg-amber-50", text: "text-amber-600" },
  word: { bg: "bg-blue-500", text: "text-white", label: "W" },
  pdf: { bg: "bg-gray-50", text: "text-red-500" },
  photoshop: { bg: "bg-sky-600", text: "text-white", label: "Ps" },
  audio: { bg: "bg-gray-50", text: "text-gray-500" },
  image: { bg: "bg-gray-50", text: "text-emerald-500" },
  other: { bg: "bg-gray-50", text: "text-gray-400" },
};

export const FileTypeIcon: React.FC<FileTypeIconProps> = ({ kind }) => {
  const style = STYLES[kind];

  if (style.label) {
    return (
      <span className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold ${style.bg} ${style.text}`}>
        {style.label}
      </span>
    );
  }

  const Icon = kind === "audio" ? Music2 : kind === "image" ? ImageIcon : kind === "pdf" ? FileType : FileText;

  return (
    <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${style.bg} ${style.text}`}>
      <Icon className="h-5 w-5" />
    </span>
  );
};

export default FileTypeIcon;