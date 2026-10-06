import React, { useState } from "react";
import { X, Search, Check } from "lucide-react";
import type { ChatConversation, ChatMember } from "../../types/chat";
import { AddPersonChip } from "./AddPersonChip";

interface InviteMembersModalProps {
  isOpen: boolean;
  onClose: () => void;
  conversation: ChatConversation;
  directory: ChatConversation[]; 
  onInvite: (people: ChatConversation[]) => void;
}

export const InviteMembersModal: React.FC<InviteMembersModalProps> = ({
  isOpen,
  onClose,
  conversation,
  directory,
  onInvite,
}) => {
  const [query, setQuery] = useState("");
  const [pendingInvites, setPendingInvites] = useState<ChatConversation[]>([]);

  if (!isOpen) return null;

  const existingMemberNames = new Set((conversation.members ?? []).map((m) => m.name));

  const suggestions = directory.filter(
    (p) =>
      query.length > 0 &&
      p.name.toLowerCase().includes(query.toLowerCase()) &&
      !pendingInvites.some((inv) => inv.id === p.id) &&
      !existingMemberNames.has(p.name)
  );

  const addPending = (person: ChatConversation) => {
    setPendingInvites((prev) => [...prev, person]);
    setQuery("");
  };

  const removePending = (personId: string) => {
    setPendingInvites((prev) => prev.filter((p) => p.id !== personId));
  };

  const handleInvite = () => {
    if (pendingInvites.length === 0) return;
    onInvite(pendingInvites);
    setPendingInvites([]);
    setQuery("");
    onClose();
  };

  
  const alreadyMembers: ChatMember[] = conversation.members ?? [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-1 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Invite New Members</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="mb-4 text-xs text-gray-400">
          Invite Members to <span className="font-medium text-gray-600">{conversation.name.replace("#", "")} Team</span>
        </p>

        <div className="relative mb-4">
          <div className="flex min-h-[42px] flex-wrap items-center gap-1.5 rounded-lg border border-gray-200 px-2 py-1.5 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400">
            {pendingInvites.map((person) => (
              <AddPersonChip key={person.id} person={person} onRemove={() => removePending(person.id)} />
            ))}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={pendingInvites.length === 0 ? "Search members..." : ""}
              className="min-w-[100px] flex-1 border-none bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
            <Search className="h-3.5 w-3.5 shrink-0 text-gray-300" />
          </div>

          {suggestions.length > 0 && (
            <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-lg border border-gray-100 bg-white p-1 shadow-lg">
              {suggestions.map((person) => (
                <button
                  key={person.id}
                  type="button"
                  onClick={() => addPending(person)}
                  className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-700">
                    {person.name.charAt(0)}
                  </span>
                  {person.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {(alreadyMembers.length > 0 || pendingInvites.length > 0) && (
          <div className="mb-5">
            <p className="mb-2 text-xs font-medium text-gray-400">
              Invited ({alreadyMembers.length + pendingInvites.length})
            </p>
            <div className="max-h-48 space-y-1 overflow-y-auto">
              {alreadyMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between rounded-lg px-1 py-1.5">
                  <div className="flex items-center gap-2.5">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} className="h-7 w-7 rounded-full object-cover" />
                    ) : (
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                        {member.name.charAt(0)}
                      </span>
                    )}
                    <span className="text-sm text-gray-700">{member.name}</span>
                  </div>
                  <Check className="h-4 w-4 text-emerald-500" />
                </div>
              ))}
              {pendingInvites.map((person) => (
                <div key={person.id} className="flex items-center justify-between rounded-lg px-1 py-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                      {person.name.charAt(0)}
                    </span>
                    <span className="text-sm text-gray-700">{person.name}</span>
                  </div>
                  <Check className="h-4 w-4 text-emerald-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handleInvite}
          disabled={pendingInvites.length === 0}
          className="rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Invite
        </button>
      </div>
    </div>
  );
};

export default InviteMembersModal;