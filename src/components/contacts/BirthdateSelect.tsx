import React from "react";
import { ChevronDown } from "lucide-react";

interface BirthdateSelectProps {
  day: string;
  month: string;
  year: string;
  onDayChange: (value: string) => void;
  onMonthChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1));
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const YEARS = Array.from({ length: 80 }, (_, i) => String(new Date().getFullYear() - i));

export const BirthdateSelect: React.FC<BirthdateSelectProps> = ({
  day,
  month,
  year,
  onDayChange,
  onMonthChange,
  onYearChange,
}) => {
  const selectClass =
    "w-full appearance-none rounded-lg border border-gray-200 px-3 py-2 pr-7 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400";

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <select value={day} onChange={(e) => onDayChange(e.target.value)} className={selectClass}>
          <option value="" disabled>Day</option>
          {DAYS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
      </div>
      <div className="relative flex-[2]">
        <select value={month} onChange={(e) => onMonthChange(e.target.value)} className={selectClass}>
          <option value="" disabled>Month</option>
          {MONTHS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
      </div>
      <div className="relative flex-1">
        <select value={year} onChange={(e) => onYearChange(e.target.value)} className={selectClass}>
          <option value="" disabled>Year</option>
          {YEARS.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

export default BirthdateSelect;