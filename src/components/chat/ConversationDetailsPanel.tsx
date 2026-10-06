import React from "react";
import { Hash } from "lucide-react";
import type { ChatConversation } from "../../types/chat";
import { ChatFileTypeIcon } from "./ChatFileTypeIcon";

interface ConversationDetailsPanelProps {
  conversation: ChatConversation;
  onViewAllFiles?: () => void;
  onViewAllPhotos?: () => void;
  onViewAllMembers?: () => void;
}

export const ConversationDetailsPanel: React.FC<ConversationDetailsPanelProps> = ({
  conversation,
  onViewAllFiles,
  onViewAllPhotos,
  onViewAllMembers,
}) => {
  const files = conversation.sharedFiles ?? [];
  const photos = conversation.sharedPhotos ?? [];
  const members = conversation.members ?? [];

  return (
    <div className="w-72 shrink-0 overflow-y-auto border-l border-gray-100 bg-white p-5">
      <div className="mb-6 flex flex-col items-center gap-2 text-center">
        {conversation.avatar ? (
          <img
            src={conversation.avatar}
            alt={conversation.name}
            className="h-20 w-20 rounded-full object-cover"
          />
        ) : conversation.kind === "team" ? (
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-3xl font-semibold text-emerald-600">
            <Hash className="h-8 w-8" />
          </span>
        ) : (
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-3xl font-semibold text-emerald-600">
            {conversation.name.charAt(0)}
          </span>
        )}
        <p className="text-base font-semibold text-gray-900">{conversation.name}</p>
        {!!conversation.memberCount && (
          <p className="text-sm text-gray-400">Members ({conversation.memberCount})</p>
        )}
      </div>

      {files.length > 0 && (
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Files</p>
            <button
              type="button"
              onClick={onViewAllFiles}
              className="text-xs font-medium text-emerald-600 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-2">
            {files.map((file) => (
              <div key={file.id} className="flex items-center gap-2.5">
                <ChatFileTypeIcon kind={file.kind} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium text-gray-800">{file.name}</p>
                  <p className="text-[11px] text-gray-400">{file.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {photos.length > 0 && (
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Photos</p>
            <button
              type="button"
              onClick={onViewAllPhotos}
              className="text-xs font-medium text-emerald-600 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {photos.map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-gradient-to-br from-emerald-300 to-sky-400"
              />
            ))}
          </div>
        </div>
      )}

      {members.length > 0 && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Members</p>
            <button
              type="button"
              onClick={onViewAllMembers}
              className="text-xs font-medium text-emerald-600 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-2.5">
            {members.map((member) => (
              <div key={member.id} className="flex items-center gap-2.5">
                <div className="relative shrink-0">
                  {member.avatar ? (
                    <img src={member.avatar} alt={member.name} className="h-8 w-8 rounded-full object-cover" />
                  ) : (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                      {member.name.charAt(0)}
                    </span>
                  )}
                  {member.online && (
                    <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-gray-800">{member.name}</p>
                  <p className="truncate text-[11px] text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationDetailsPanel;