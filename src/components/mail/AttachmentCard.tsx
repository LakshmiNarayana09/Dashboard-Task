import React from "react";
import { FileText, Archive, Download } from "lucide-react";
import type { MailAttachment } from "../../types/mail";

interface AttachmentCardProps {
  attachment: MailAttachment;
  onDownload?: (attachment: MailAttachment) => void;
}

const ICONS: Record<MailAttachment["type"], { Icon: React.ElementType; className: string }> = {
  pdf: { Icon: FileText, className: "text-red-500 bg-red-50" },
  zip: { Icon: Archive, className: "text-amber-500 bg-amber-50" },
  image: { Icon: FileText, className: "text-sky-500 bg-sky-50" },
  doc: { Icon: FileText, className: "text-blue-500 bg-blue-50" },
  other: { Icon: FileText, className: "text-gray-500 bg-gray-100" },
};

export const AttachmentCard: React.FC<AttachmentCardProps> = ({ attachment, onDownload }) => {
  const { Icon, className } = ICONS[attachment.type];

  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 px-3 py-2.5">
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${className}`}>
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-800">{attachment.name}</p>
        <p className="text-xs text-gray-400">{attachment.size}</p>
      </div>
      <button
        type="button"
        onClick={() => onDownload?.(attachment)}
        aria-label={`Download ${attachment.name}`}
        className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
      >
        <Download className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AttachmentCard;