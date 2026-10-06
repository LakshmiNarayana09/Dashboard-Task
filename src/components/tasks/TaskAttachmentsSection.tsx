import React from "react";
import { Download, Paperclip } from "lucide-react";
import type { TaskAttachmentFile } from "../../types/tasks";

interface TaskAttachmentsSectionProps {
  attachments: TaskAttachmentFile[];
}

export const TaskAttachmentsSection: React.FC<TaskAttachmentsSectionProps> = ({ attachments }) => {
  if (attachments.length === 0) return null;

  return (
    <div>
      <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-gray-500">
        <Paperclip className="h-3.5 w-3.5" />
        Attachments ({attachments.length})
      </p>
      <div className="space-y-2">
        {attachments.map((file) => (
          <div
            key={file.id}
            className="flex items-center gap-3 rounded-lg border border-gray-100 px-3 py-2"
          >
            <span className="h-9 w-9 shrink-0 rounded-md bg-gradient-to-br from-emerald-200 to-sky-300" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-800">{file.name}</p>
              <p className="text-xs text-gray-400">{file.size}</p>
            </div>
            <button
              type="button"
              aria-label={`Download ${file.name}`}
              className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskAttachmentsSection;