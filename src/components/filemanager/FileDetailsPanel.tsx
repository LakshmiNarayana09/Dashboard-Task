import React, { useState } from "react";
import { Folder } from "lucide-react";
import type { FileManagerDetails, FileKind } from "../../types/fileManager";
import { FileTypeIcon } from "./FileTypeIcon";

interface FileDetailsPanelProps {
  name: string;
  details: FileManagerDetails;
  fileKind?: FileKind; // omitted for folders
}

const SettingToggle: React.FC<{ label: string; defaultChecked?: boolean }> = ({
  label,
  defaultChecked = false,
}) => {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-sm text-gray-600">{label}</span>
      <button
        type="button"
        onClick={() => setChecked((v) => !v)}
        aria-pressed={checked}
        className={`relative h-5 w-9 rounded-full transition-colors ${checked ? "bg-emerald-500" : "bg-gray-200"}`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
};

export const FileDetailsPanel: React.FC<FileDetailsPanelProps> = ({ name, details, fileKind }) => {
  const rows: { label: string; value: string }[] = [
    { label: "Type", value: details.type },
    { label: "Size", value: details.size },
    { label: "Owner", value: details.owner },
    { label: "Location", value: details.location },
    { label: "Modified", value: details.modified },
    { label: "Created", value: details.created },
  ];

  return (
    <div className="flex w-72 shrink-0 flex-col border-l border-gray-100 bg-white p-5">
      <div className="mb-6 flex flex-col items-center gap-2 text-center">
        {fileKind ? (
          <div className="scale-150">
            <FileTypeIcon kind={fileKind} />
          </div>
        ) : (
          <Folder className="h-14 w-14 text-amber-400" fill="currentColor" fillOpacity={0.15} />
        )}
        <p className="text-sm font-semibold text-gray-900">{name}</p>
      </div>

      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Info</p>
      <div className="mb-6 divide-y divide-gray-50">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-2 text-sm">
            <span className="text-gray-400">{row.label}</span>
            <span
              className={`font-medium ${row.label === "Location" ? "text-emerald-600" : "text-gray-700"}`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">Settings</p>
      <div className="divide-y divide-gray-50">
        <SettingToggle label="File Sharing" defaultChecked />
        <SettingToggle label="Backup" />
        <SettingToggle label="Sync" />
      </div>
    </div>
  );
};

export default FileDetailsPanel;