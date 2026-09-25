
import React, { useEffect, useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import type { ProductFilters, ProductStatus } from "../../types/products";
import { PRICE_MIN, PRICE_MAX } from "../../data/constantsData";
import { PriceRangeSlider } from "./PriceRangeSlider";

interface FilterPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  filters: ProductFilters;
  onApply: (filters: ProductFilters) => void;
}

const STATUS_OPTIONS: ("All" | ProductStatus)[] = ["All", "Available", "Disabled"];

export const FilterPopover: React.FC<FilterPopoverProps> = ({
  isOpen,
  onClose,
  categories,
  filters,
  onApply,
}) => {
  const [draft, setDraft] = useState<ProductFilters>(filters);

  useEffect(() => {
    if (isOpen) setDraft(filters);
  }, [isOpen, filters]);

  if (!isOpen) return null;

  const handleSave = () => {
    onApply(draft);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-30" onClick={onClose} />

      <div className="absolute right-0 top-full z-40 mt-2 w-72 rounded-2xl border border-gray-100 bg-white p-5 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Filter</h2>

        <div className="mb-4">
          <label className="mb-1.5 block text-xs font-medium text-gray-500">Category</label>
          <div className="relative">
            <select
              value={draft.category}
              onChange={(e) => setDraft((d) => ({ ...d, category: e.target.value }))}
              className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 pr-8 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            >
              <option value="All">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-1.5 block text-xs font-medium text-gray-500">Status</label>
          <div className="relative">
            <select
              value={draft.status}
              onChange={(e) =>
                setDraft((d) => ({ ...d, status: e.target.value as ProductFilters["status"] }))
              }
              className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 pr-8 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            >
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-1.5 block text-xs font-medium text-gray-500">Date</label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Calendar className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                value={draft.dateFrom}
                onChange={(e) => setDraft((d) => ({ ...d, dateFrom: e.target.value }))}
                className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-8 pr-2 text-xs text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
            </div>
            <div className="relative flex-1">
              <Calendar className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                value={draft.dateTo}
                onChange={(e) => setDraft((d) => ({ ...d, dateTo: e.target.value }))}
                className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-8 pr-2 text-xs text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label className="mb-2 block text-xs font-medium text-gray-500">Price</label>
          <PriceRangeSlider
            min={PRICE_MIN}
            max={PRICE_MAX}
            valueMin={draft.minPrice}
            valueMax={draft.maxPrice}
            onChange={(minPrice, maxPrice) => setDraft((d) => ({ ...d, minPrice, maxPrice }))}
          />
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-medium text-white hover:bg-emerald-600"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default FilterPopover;