import React from "react";
import { Plus, Inbox, Star, FileEdit, Send, AlertCircle, Trash2 } from "lucide-react";
import type { MailFolder, MailFolderKey, MailLabel } from "../../types/mail";
import { MAIL_FOLDERS } from "../../data/mockMailData";
import { LabelRow } from "./LabelRow";

interface MailFolderSidebarProps {
  activeFolder: MailFolderKey;
  onFolderChange: (key: MailFolderKey) => void;
  onNewMessage: () => void;
  labels: MailLabel[];
  onAddLabelClick: () => void;
  onRenameLabel: (key: string, name: string) => void;
  onDeleteLabel: (key: string) => void;
  onChangeLabelColor: (key: string, colorClass: string) => void;
  onAddSublabel: (key: string) => void;
}

const FOLDER_ICONS: Record<MailFolderKey, React.ElementType> = {
  inbox: Inbox,
  marked: Star,
  drafts: FileEdit,
  sent: Send,
  important: AlertCircle,
  deleted: Trash2,
};

export const MailFolderSidebar: React.FC<MailFolderSidebarProps> = ({
  activeFolder,
  onFolderChange,
  onNewMessage,
  labels,
  onAddLabelClick,
  onRenameLabel,
  onDeleteLabel,
  onChangeLabelColor,
  onAddSublabel,
}) => {
  return (
    <div className="flex w-56 shrink-0 flex-col border-r border-gray-100 bg-white p-4">
      <button
        type="button"
        onClick={onNewMessage}
        className="mb-5 flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-600"
      >
        <Plus className="h-4 w-4" />
        New Message
      </button>

      <nav className="space-y-1">
        {MAIL_FOLDERS.map((folder: MailFolder) => {
          const Icon = FOLDER_ICONS[folder.key];
          const isActive = folder.key === activeFolder;
          return (
            <button
              key={folder.key}
              type="button"
              onClick={() => onFolderChange(folder.key)}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                isActive ? "bg-[#dff8d7] font-medium text-[#159447]" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={1.8} />
              <span className="flex-1">{folder.label}</span>
              {!!folder.count && (
                <span className="flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                  {folder.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between px-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Labels</p>
          <button
            type="button"
            onClick={onAddLabelClick}
            aria-label="Add label"
            className="flex h-5 w-5 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="space-y-1">
          {labels.map((label) => (
            <LabelRow
              key={label.key}
              label={label}
              onRename={onRenameLabel}
              onDelete={onDeleteLabel}
              onColorChange={onChangeLabelColor}
              onAddSublabel={onAddSublabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MailFolderSidebar;