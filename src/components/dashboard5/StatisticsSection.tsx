
import {
  CalendarDays,
  ChevronDown,
} from "lucide-react";

import StatisticsCard from "./StatisticsCard";
import { statistics } from "../../data/mockDashboardData";

function StatisticsSection() {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[11px] font-semibold text-gray-600">
          Statistics
        </h2>

        <button className="flex items-center gap-1 rounded border border-gray-100 px-2 py-1 text-[8px] text-gray-500">
          <CalendarDays size={9} />

          <span>19 Aug - 25 Aug</span>

          <ChevronDown size={9} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {statistics.map((statistic) => (
          <StatisticsCard
            key={statistic.id}
            statistic={statistic}
          />
        ))}
      </div>
    </section>
  );
}

export default StatisticsSection;