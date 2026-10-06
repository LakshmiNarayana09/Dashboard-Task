
import {
  CalendarDays,
  ChevronDown,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { statisticsChartData } from "../../data/mockDashboardData";

function Statistics() {
  return (
    <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
      
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-700">
            Statistics
          </h2>

          <div className="mt-2 flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-[10px] text-gray-400">
                Income
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-teal-400" />

              <span className="text-[10px] text-gray-400">
                Expense
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-gray-100 px-2.5 py-1.5 text-[9px] text-gray-500"
        >
          <CalendarDays size={11} />

          19 Aug - 25 Aug

          <ChevronDown size={11} />
        </button>
      </div>

      
      <div className="relative h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={statisticsChartData}
            margin={{
              top: 8,
              right: 4,
              left: 8,
              bottom: 0,
            }}
            barCategoryGap="30%"
          >
            <CartesianGrid
              horizontal={true}
              vertical={false}
              stroke="#f3f4f6"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 8,
                fill: "#9ca3af",
              }}
              dy={8}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 8,
                fill: "#d1d5db",
              }}
              tickFormatter={(value) => `${value}k`}
              width={28}
            />

            <Bar
              dataKey="income"
              fill="#10b981"
              radius={[4, 4, 0, 0]}
              barSize={12}
            />

            <Bar
              dataKey="expense"
              fill="#5eead4"
              radius={[4, 4, 0, 0]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default Statistics;

