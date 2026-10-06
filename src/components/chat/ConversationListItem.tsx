import React from "react";
import type { ChatConversation } from "../../types/chat";
import { ConversationAvatar } from "./ConversationAvatar";

interface ConversationListItemProps {
  conversation: ChatConversation;
  isActive: boolean;
  onClick: () => void;
}

export const ConversationListItem: React.FC<ConversationListItemProps> = ({
  conversation,
  isActive,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors ${
        isActive ? "bg-emerald-50" : "hover:bg-gray-50"
      }`}
    >
      <ConversationAvatar name={conversation.name} kind={conversation.kind} avatar={conversation.avatar} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-800">{conversation.name}</p>
        {conversation.lastMessage && (
          <p className="truncate text-xs text-gray-400">{conversation.lastMessage}</p>
        )}
      </div>
      {!!conversation.unreadCount && (
        <span className="flex h-4 min-w-[16px] shrink-0 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
          {conversation.unreadCount}
        </span>
      )}
    </button>
  );
};

export default ConversationListItem;