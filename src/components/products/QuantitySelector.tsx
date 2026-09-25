
import React from "react";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
  min = 1,
  max = 99,
}) => {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(Math.min(max, value + 1));

  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-gray-200 px-2 py-1.5">
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="flex h-6 w-6 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="w-4 text-center text-sm font-medium text-gray-800">{value}</span>
      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        aria-label="Increase quantity"
        className="flex h-6 w-6 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default QuantitySelector;