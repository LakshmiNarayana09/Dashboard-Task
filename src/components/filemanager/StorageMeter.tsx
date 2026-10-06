import React from "react";

interface StorageMeterProps {
  percentUsed: number;
}

export const StorageMeter: React.FC<StorageMeterProps> = ({ percentUsed }) => {
  return (
    <div className="px-1">
      <p className="mb-1.5 text-xs font-medium text-gray-400">Storage</p>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full rounded-full bg-emerald-500" style={{ width: `${percentUsed}%` }} />
      </div>
      <p className="mt-1 text-right text-[10px] text-gray-400">{percentUsed}%</p>
    </div>
  );
};

export default StorageMeter;