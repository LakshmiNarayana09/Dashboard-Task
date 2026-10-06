import React from "react";
import { Search, Plus } from "lucide-react";
import type { ChatConversation } from "../../types/chat";
import { ConversationListItem } from "./ConversationListItem";

interface ChatSidebarListProps {
  teams: ChatConversation[];
  people: ChatConversation[];
  activeId: string | null;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSelect: (conversation: ChatConversation) => void;
  onAddTeam?: () => void;
  onAddPerson?: () => void;
}

export const ChatSidebarList: React.FC<ChatSidebarListProps> = ({
  teams,
  people,
  activeId,
  searchValue,
  onSearchChange,
  onSelect,
  onAddTeam,
  onAddPerson,
}) => {
  const query = searchValue.toLowerCase();
  const filteredTeams = teams.filter((t) => t.name.toLowerCase().includes(query));
  const filteredPeople = people.filter((p) => p.name.toLowerCase().includes(query));

  return (
    <div className="flex w-72 shrink-0 flex-col border-r border-gray-100 bg-white">
      <div className="border-b border-gray-100 p-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <div className="mb-4">
          <div className="mb-1.5 flex items-center justify-between px-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Teams</p>
            <button
              type="button"
              onClick={onAddTeam}
              aria-label="Add team"
              className="flex h-5 w-5 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="space-y-1">
            {filteredTeams.map((team) => (
              <ConversationListItem
                key={team.id}
                conversation={team}
                isActive={team.id === activeId}
                onClick={() => onSelect(team)}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between px-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">People</p>
            <button
              type="button"
              onClick={onAddPerson}
              aria-label="Add person"
              className="flex h-5 w-5 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="space-y-1">
            {filteredPeople.map((person) => (
              <ConversationListItem
                key={person.id}
                conversation={person}
                isActive={person.id === activeId}
                onClick={() => onSelect(person)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebarList;