import React, { useMemo, useState } from "react";
import { ChatSidebarList } from "./ChatSidebarList";
import { ChatThreadHeader } from "./ChatThreadHeader";
import { MessageBubble } from "./MessageBubble";
import { MessageComposer } from "./MessageComposer";
import type { ChatConversation, ChatMessage } from "../../types/chat";
import { ConversationDetailsPanel } from "./ConversationDetailsPanel";
import { TEAM_CONVERSATIONS as INITIAL_TEAMS, PEOPLE_CONVERSATIONS, mockMessagesByConversation } from "../../data/mockChatData";

export const ChatPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState<string>("p2");
  const [messagesByConversation, setMessagesByConversation] = useState(mockMessagesByConversation);
  const [teams, setTeams] = useState<ChatConversation[]>(INITIAL_TEAMS);

  const allConversations = useMemo(
    () => [...teams, ...PEOPLE_CONVERSATIONS],
    [teams]
  );

  const activeConversation = allConversations.find((c) => c.id === activeId) ?? null;
  const messages = activeConversation ? messagesByConversation[activeConversation.id] ?? [] : [];

  const handleSelect = (conversation: ChatConversation) => {
    setActiveId(conversation.id);
  };

  const handleSend = (text: string) => {
    if (!activeConversation) return;
    const newMessage: ChatMessage = {
      id: `${Date.now()}`,
      sender: "me",
      text,
      timestamp: "Just now",
    };
    setMessagesByConversation((prev) => ({
      ...prev,
      [activeConversation.id]: [...(prev[activeConversation.id] ?? []), newMessage],
    }));
  };

  const handleDeleteMessage = (message: ChatMessage) => {
    if (!activeConversation) return;
    setMessagesByConversation((prev) => ({
      ...prev,
      [activeConversation.id]: (prev[activeConversation.id] ?? []).filter((m) => m.id !== message.id),
    }));
  };

  const handleEditMessage = (message: ChatMessage) => {
    console.log("Edit message", message.id);
  };

  const handleDownloadFile = (message: ChatMessage) => {
    console.log("Download file from message", message.id);
  };

  const handleInviteMembers = (conversationId: string, people: ChatConversation[]) => {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === conversationId
          ? {
              ...team,
              members: [
                ...(team.members ?? []),
                ...people.map((p) => ({ id: p.id, name: p.name, role: "Member" })),
              ],
              memberCount: (team.memberCount ?? 0) + people.length,
            }
          : team
      )
    );
  };

  return (
    <div className="flex min-h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <ChatSidebarList
        teams={teams}
        people={PEOPLE_CONVERSATIONS}
        activeId={activeId}
        searchValue={search}
        onSearchChange={setSearch}
        onSelect={handleSelect}
        onAddTeam={() => console.log("Add team")}
        onAddPerson={() => console.log("Add person")}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        {activeConversation ? (
          <>
            <ChatThreadHeader
              conversation={activeConversation}
              onInvite={(people) => handleInviteMembers(activeConversation.id, people)}
            />

            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  conversation={activeConversation}
                  onEdit={message.sender === "me" ? handleEditMessage : undefined}
                  onDelete={message.sender === "me" ? handleDeleteMessage : undefined}
                  onDownloadFile={handleDownloadFile}
                />
              ))}
              {messages.length === 0 && (
                <p className="py-12 text-center text-sm text-gray-400">No messages yet</p>
              )}
            </div>

            <MessageComposer onSend={handleSend} />
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center text-sm text-gray-400">
            Select a conversation to start chatting
          </div>
        )}
      </div>

      {activeConversation && (
        <ConversationDetailsPanel
          conversation={activeConversation}
          onViewAllFiles={() => console.log("View all files")}
          onViewAllPhotos={() => console.log("View all photos")}
          onViewAllMembers={() => console.log("View all members")}
        />
      )}
    </div>
  );
};

export default ChatPage;