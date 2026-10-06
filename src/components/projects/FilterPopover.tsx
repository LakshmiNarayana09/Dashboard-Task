import { Search, X } from "lucide-react";
import { useState } from "react";

interface FilterValues {
  search: string;
  member: string;
  dueDate: string;
  status: string;
}

interface FilterPopoverProps {
  filters: FilterValues;
  onApply: (filters: FilterValues) => void;
  onClose: () => void;
  members: string[];
}

function FilterPopover({
  filters,
  onApply,
  onClose,
  members,
}: FilterPopoverProps) {
  const [localFilters, setLocalFilters] =
    useState<FilterValues>(filters);

  const updateFilter = (
    key: keyof FilterValues,
    value: string
  ) => {
    setLocalFilters((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const handleReset = () => {
    const resetFilters: FilterValues = {
      search: "",
      member: "",
      dueDate: "",
      status: "",
    };

    setLocalFilters(resetFilters);
    onApply(resetFilters);
  };

  return (
    <div className="absolute right-0 top-12 z-50 w-[300px] rounded-lg border border-gray-100 bg-white p-4 shadow-xl">
      
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-700">
          Filter
        </h2>

        <button
          type="button"
          onClick={onClose}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100"
        >
          <X size={13} />
        </button>
      </div>

      
      <div className="relative">
        <Search
          size={13}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search Projects..."
          value={localFilters.search}
          onChange={(event) =>
            updateFilter("search", event.target.value)
          }
          className="h-9 w-full rounded-md border border-gray-200 pl-8 pr-3 text-[10px] text-gray-600 outline-none placeholder:text-gray-400 focus:border-green-400"
        />
      </div>

      
      <div className="mt-4">
        <label className="mb-1.5 block text-[10px] text-gray-400">
          Members
        </label>

        <select
          value={localFilters.member}
          onChange={(event) =>
            updateFilter("member", event.target.value)
          }
          className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-[10px] text-gray-600 outline-none focus:border-green-400"
        >
          <option value="">All Members</option>

          {members.map((member) => (
            <option
              key={member}
              value={member}
            >
              {member}
            </option>
          ))}
        </select>
      </div>

      
      <div className="mt-4">
        <label className="mb-1.5 block text-[10px] text-gray-400">
          Due Date
        </label>

        <select
          value={localFilters.dueDate}
          onChange={(event) =>
            updateFilter("dueDate", event.target.value)
          }
          className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-[10px] text-gray-600 outline-none focus:border-green-400"
        >
          <option value="">Due anytime</option>
          <option value="5 days">5 days left</option>
          <option value="1 week">1 week left</option>
        </select>
      </div>

      
      <div className="mt-4">
        <label className="mb-1.5 block text-[10px] text-gray-400">
          Status
        </label>

        <select
          value={localFilters.status}
          onChange={(event) =>
            updateFilter("status", event.target.value)
          }
          className="h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-[10px] text-gray-600 outline-none focus:border-green-400"
        >
          <option value="">All Status</option>
          <option value="Started">Started</option>
          <option value="On Hold">On Hold</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      
      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={handleReset}
          className="text-[9px] text-green-600 underline"
        >
          Reset all Filters
        </button>

        <button
          type="button"
          onClick={() => onApply(localFilters)}
          className="rounded-md bg-green-600 px-4 py-2 text-[10px] font-medium text-white hover:bg-green-700"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default FilterPopover;