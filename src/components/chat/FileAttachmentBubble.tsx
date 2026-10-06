import React from "react";
import { FileText, Download } from "lucide-react";
import type { ChatFileAttachment } from "../../types/chat";

interface FileAttachmentBubbleProps {
  file: ChatFileAttachment;
  onDownload?: () => void;
}

export const FileAttachmentBubble: React.FC<FileAttachmentBubbleProps> = ({ file, onDownload }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-3 py-2.5 shadow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
        <FileText className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium text-gray-800">{file.name}</p>
        <p className="text-[11px] text-gray-400">{file.size}</p>
      </div>
      <button
        type="button"
        onClick={onDownload}
        aria-label={`Download ${file.name}`}
        className="flex items-center gap-1 rounded-lg bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600 hover:bg-emerald-100"
      >
        <Download className="h-3.5 w-3.5" />
        Download
      </button>
    </div>
  );
};

export default FileAttachmentBubble;