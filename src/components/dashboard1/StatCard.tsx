
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  positive?: boolean;
  icon: LucideIcon;
}

function StatCard({
  title,
  value,
  percentage,
  positive = true,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
      <div>
        <p className="text-[9px] text-gray-400">{title}</p>

        <div className="mt-1 flex items-end gap-2">
          <span className="text-[15px] font-medium text-gray-700">
            {value}
          </span>

          <span
            className={`mb-0.5 text-[8px] ${
              positive ? "text-[#24a148]" : "text-red-400"
            }`}
          >
            {percentage}
          </span>
        </div>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eafaf6] text-[#40c8b1]">
        <Icon size={21} strokeWidth={2} />
      </div>
    </div>
  );
}

export default StatCard;