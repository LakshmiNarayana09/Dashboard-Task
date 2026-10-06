import React, { useEffect, useState } from "react";
import { X, Search, ChevronDown } from "lucide-react";
import type {
  TaskFilters,
  TaskLabelTag,
  TaskAssignee,
  TaskDueFilter,
  TaskStatusFilter,
} from "../../types/tasks";

interface TaskFilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  filters: TaskFilters;
  onApply: (filters: TaskFilters) => void;
  labelOptions: TaskLabelTag[];
  memberOptions: TaskAssignee[];
}

const DUE_OPTIONS: { value: TaskDueFilter; label: string }[] = [
  { value: "anytime", label: "Due anytime" },
  { value: "today", label: "Due today" },
  { value: "week", label: "Due this week" },
  { value: "month", label: "Due this month" },
  { value: "overdue", label: "Overdue" },
];

const STATUS_OPTIONS: { value: TaskStatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "incomplete", label: "Incomplete" },
];

export const TaskFilterPanel: React.FC<TaskFilterPanelProps> = ({
  isOpen,
  onClose,
  filters,
  onApply,
  labelOptions,
  memberOptions,
}) => {
  const [draft, setDraft] = useState<TaskFilters>(filters);
  const [memberQuery, setMemberQuery] = useState("");

  useEffect(() => {
    if (isOpen) setDraft(filters);
  }, [isOpen, filters]);

  if (!isOpen) return null;

  const toggleLabel = (labelId: string) => {
    setDraft((d) => ({
      ...d,
      labelIds: d.labelIds.includes(labelId)
        ? d.labelIds.filter((id) => id !== labelId)
        : [...d.labelIds, labelId],
    }));
  };

  const removeMember = (memberId: string) => {
    setDraft((d) => ({ ...d, memberIds: d.memberIds.filter((id) => id !== memberId) }));
  };

  const addMember = (memberId: string) => {
    setDraft((d) => (d.memberIds.includes(memberId) ? d : { ...d, memberIds: [...d.memberIds, memberId] }));
    setMemberQuery("");
  };

  const selectedMembers = memberOptions.filter((m) => draft.memberIds.includes(m.id));
  const memberSuggestions = memberOptions.filter(
    (m) =>
      !draft.memberIds.includes(m.id) &&
      m.name.toLowerCase().includes(memberQuery.toLowerCase()) &&
      memberQuery.length > 0
  );

  const handleReset = () => {
    const resetFilters: TaskFilters = {
      search: "",
      labelIds: [],
      memberIds: [],
      dueDate: "anytime",
      status: "all",
    };
    setDraft(resetFilters);
    onApply(resetFilters);
  };

  const handleApply = () => {
    onApply(draft);
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/20" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 z-50 flex w-80 flex-col border-l border-gray-100 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <h2 className="text-xl font-semibold text-gray-900">Filter</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={draft.search}
              onChange={(e) => setDraft((d) => ({ ...d, search: e.target.value }))}
              placeholder="Search Tasks..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium text-gray-500">Labels</label>
            <div className="flex flex-wrap gap-2">
              {labelOptions.map((label) => {
                const isSelected = draft.labelIds.includes(label.id);
                return (
                  <button
                    key={label.id}
                    type="button"
                    onClick={() => toggleLabel(label.id)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium text-white ${label.colorClass} ${
                      isSelected ? "ring-2 ring-offset-1 ring-gray-300" : "opacity-60"
                    }`}
                  >
                    {label.name}
                    {isSelected && " ✓"}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium text-gray-500">Members</label>
            <div className="flex flex-wrap items-center gap-2 rounded-lg border border-gray-200 px-2 py-2">
              {selectedMembers.map((member) => (
                <span
                  key={member.id}
                  className="flex items-center gap-1.5 rounded-full bg-gray-100 py-1 pl-1 pr-2 text-xs font-medium text-gray-700"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-200 text-[9px] font-semibold text-emerald-800">
                    {member.name.charAt(0)}
                  </span>
                  {member.name}
                  <button
                    type="button"
                    onClick={() => removeMember(member.id)}
                    aria-label={`Remove ${member.name}`}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              <div className="relative min-w-[80px] flex-1">
                <input
                  type="text"
                  value={memberQuery}
                  onChange={(e) => setMemberQuery(e.target.value)}
                  placeholder="Add member..."
                  className="w-full border-none bg-transparent text-xs text-gray-700 placeholder:text-gray-400 focus:outline-none"
                />
                {memberSuggestions.length > 0 && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-40 rounded-lg border border-gray-100 bg-white p-1 shadow-lg">
                    {memberSuggestions.map((member) => (
                      <button
                        key={member.id}
                        type="button"
                        onClick={() => addMember(member.id)}
                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs text-gray-700 hover:bg-gray-50"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[9px] font-semibold text-emerald-700">
                          {member.name.charAt(0)}
                        </span>
                        {member.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Search className="h-3.5 w-3.5 shrink-0 text-gray-300" />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Due Date</label>
            <div className="relative">
              <select
                value={draft.dueDate}
                onChange={(e) => setDraft((d) => ({ ...d, dueDate: e.target.value as TaskDueFilter }))}
                className="w-full appearance-none rounded-lg border border-gray-200 px-3 py-2 pr-8 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                {DUE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Status</label>
            <div className="relative">
              <select
                value={draft.status}
                onChange={(e) => setDraft((d) => ({ ...d, status: e.target.value as TaskStatusFilter }))}
                className="w-full appearance-none rounded-lg border border-gray-200 px-3 py-2 pr-8 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                {STATUS_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-gray-100 px-5 py-4">
          <button
            type="button"
            onClick={handleApply}
            className="rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-600"
          >
            Apply Filters
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="text-sm font-medium text-emerald-600 hover:underline"
          >
            Reset all Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskFilterPanel;