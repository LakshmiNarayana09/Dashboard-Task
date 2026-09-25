
import React from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  valueMin: number;
  valueMax: number;
  onChange: (min: number, max: number) => void;
  step?: number;
}

export const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  valueMin,
  valueMax,
  onChange,
  step = 50,
}) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Math.min(Number(e.target.value), valueMax - step);
    onChange(next, valueMax);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Math.max(Number(e.target.value), valueMin + step);
    onChange(valueMin, next);
  };

  const leftPct = ((valueMin - min) / (max - min)) * 100;
  const rightPct = ((valueMax - min) / (max - min)) * 100;

  return (
    <div>
      <div className="relative h-5">
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-gray-200" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-emerald-500"
          style={{ left: `${leftPct}%`, right: `${100 - rightPct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={valueMin}
          onChange={handleMinChange}
          className="range-slider-thumb pointer-events-none absolute top-1/2 h-5 w-full -translate-y-1/2 appearance-none bg-transparent"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={valueMax}
          onChange={handleMaxChange}
          className="range-slider-thumb pointer-events-none absolute top-1/2 h-5 w-full -translate-y-1/2 appearance-none bg-transparent"
        />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
        <span>${valueMin.toLocaleString()}</span>
        <span>${valueMax.toLocaleString()}</span>
      </div>

      <style>{`
        .range-slider-thumb::-webkit-slider-thumb {
          pointer-events: auto;
          appearance: none;
          -webkit-appearance: none;
          height: 14px;
          width: 14px;
          border-radius: 9999px;
          background: #10b981;
          border: 2px solid white;
          box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.4);
          cursor: pointer;
        }
        .range-slider-thumb::-moz-range-thumb {
          pointer-events: auto;
          height: 14px;
          width: 14px;
          border-radius: 9999px;
          background: #10b981;
          border: 2px solid white;
          box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.4);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default PriceRangeSlider;