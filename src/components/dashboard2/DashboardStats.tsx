
import {
  ArrowDown,
  ArrowUp,
  Heart,
  MessageCircle,
} from "lucide-react";

import { dashboardStatsData } from "../../data/dashboardData";

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  positive: boolean;
  icon: React.ReactNode;
}

function StatCard({
  title,
  value,
  percentage,
  positive,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-3">
      <div className="flex items-center justify-between">
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full ${
            positive ? "bg-[#eaf8ee]" : "bg-[#e8faf7]"
          }`}
        >
          {icon}
        </div>

        <div className="flex-1 pl-3">
          <p className="text-[8px] text-gray-400">
            {title}
          </p>

          <div className="mt-1 flex items-center gap-1.5">
            <span className="text-[12px] font-medium text-gray-700">
              {value}
            </span>

            <span
              className={`text-[7px] ${
                positive ? "text-[#29a455]" : "text-red-400"
              }`}
            >
              {percentage}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardStats() {
  return (
    <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
      {dashboardStatsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          percentage={stat.percentage}
          positive={stat.positive}
          icon={
            stat.icon === "visitors" ? (
              <ArrowUp
                size={12}
                className="text-[#27a453]"
              />
            ) : stat.icon === "followers" ? (
              <ArrowDown
                size={12}
                className="text-[#40c9b5]"
              />
            ) : stat.icon === "likes" ? (
              <Heart
                size={12}
                className="text-[#27a453]"
              />
            ) : (
              <MessageCircle
                size={12}
                className="text-[#40c9b5]"
              />
            )
          }
        />
      ))}
    </div>
  );
}

export default DashboardStats;