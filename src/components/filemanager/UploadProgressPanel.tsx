import React, { useState } from "react";
import { X, MoreHorizontal, RotateCw, Check } from "lucide-react";
import type { UploadingFile } from "../../types/fileManager";
import { FileTypeIcon } from "./FileTypeIcon";

interface UploadProgressPanelProps {
  files: UploadingFile[];
  onClose: () => void;
  onRetry?: (fileId: string) => void;
}

export const UploadProgressPanel: React.FC<UploadProgressPanelProps> = ({
  files,
  onClose,
  onRetry,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (files.length === 0) return null;

  const doneCount = files.filter((f) => f.status === "done").length;
  const uploadingFiles = files.filter((f) => f.status === "uploading");
  const overallPercent =
    files.length > 0
      ? Math.round(
          files.reduce((sum, f) => sum + (f.status === "done" ? 100 : f.status === "failed" ? 0 : f.progress), 0) /
            files.length
        )
      : 0;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <button
          type="button"
          onClick={() => setIsCollapsed((v) => !v)}
          className="text-left"
        >
          <p className="text-sm font-semibold text-gray-900">Uploading {files.length} files</p>
          <p className="text-xs text-gray-400">
            <span className="font-medium text-emerald-600">{overallPercent}%</span>
            {" · "}
            {doneCount} of {files.length} uploaded
            {uploadingFiles.length > 0 && " · a few minutes left"}
          </p>
        </button>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="More options"
            className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isCollapsed && (
        <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-3">
          {files.map((file) => (
            <div key={file.id} className="flex items-center gap-3">
              <div className="shrink-0 scale-75">
                <FileTypeIcon kind={file.kind} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-gray-800">{file.name}</p>

                {file.status === "failed" ? (
                  <p className="text-[11px] font-medium text-red-500">Upload Failed</p>
                ) : file.status === "uploading" ? (
                  <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: `${file.progress}%` }}
                    />
                  </div>
                ) : (
                  <p className="text-[11px] text-gray-400">{file.size}</p>
                )}
              </div>

              <div className="shrink-0">
                {file.status === "done" && <Check className="h-4 w-4 text-emerald-500" />}
                {file.status === "failed" && (
                  <button
                    type="button"
                    onClick={() => onRetry?.(file.id)}
                    aria-label={`Retry ${file.name}`}
                    className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  >
                    <RotateCw className="h-3.5 w-3.5" />
                  </button>
                )}
                {file.status === "uploading" && (
                  <span className="text-[11px] font-medium text-emerald-600">{file.progress}%</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadProgressPanel;