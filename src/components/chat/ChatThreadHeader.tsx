
import React, { useState } from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import type { ChatConversation } from "../../types/chat";
import { ConversationAvatar } from "./ConversationAvatar";
import { InviteMembersModal } from "./InviteMemberModal";
import { PEOPLE_CONVERSATIONS } from "../../data/mockChatData";

interface ChatThreadHeaderProps {
  conversation: ChatConversation;
  onInvite?: (people: ChatConversation[]) => void;
}

export const ChatThreadHeader: React.FC<ChatThreadHeaderProps> = ({ conversation, onInvite }) => {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
      <div className="flex items-center gap-2.5">
        <ConversationAvatar name={conversation.name} kind={conversation.kind} avatar={conversation.avatar} />
        <p className="text-sm font-semibold text-gray-900">{conversation.name}</p>
      </div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setIsInviteOpen(true)}
          aria-label="Invite members"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="More options"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <InviteMembersModal
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
        conversation={conversation}
        directory={PEOPLE_CONVERSATIONS}
        onInvite={(people) => onInvite?.(people)}
      />
    </div>
  );
};

export default ChatThreadHeader;