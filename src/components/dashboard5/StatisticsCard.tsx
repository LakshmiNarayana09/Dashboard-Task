
import {
  CheckCircle2,
  Clock3,
  FileText,
  Plus,
} from "lucide-react";

import type { Statistic } from "../../types/dashboard5";

interface StatisticsCardProps {
  statistic: Statistic;
}

function StatisticsCard({
  statistic,
}: StatisticsCardProps) {
  const icons = {
    file: FileText,
    plus: Plus,
    clock: Clock3,
    check: CheckCircle2,
  };

  const Icon = icons[statistic.icon as keyof typeof icons];

  return (
    <div className="rounded-[5px] border border-gray-100 bg-white p-4">
      <div
        className={`mb-3 flex h-7 w-7 items-center justify-center rounded-md ${statistic.iconBg} ${statistic.iconColor}`}
      >
        <Icon size={13} strokeWidth={1.8} />
      </div>

      <p className="text-[16px] font-medium text-gray-700">
        {statistic.value}
      </p>

      <p className="mt-0.5 text-[9px] text-gray-400">
        {statistic.title}
      </p>

      <p className="mt-2 text-[8px] text-gray-300">
        Compared with last week
      </p>
    </div>
  );
}

export default StatisticsCard;