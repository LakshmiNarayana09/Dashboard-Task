
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { statisticsData } from "../../data/mockDashboardData";



function StatisticsChart() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-gray-700">
          Statistics
        </h2>

        <select className="rounded-md border-none bg-gray-50 px-2 py-1 text-[8px] text-gray-500 outline-none">
          <option>19 Aug - 25 Aug</option>
        </select>
      </div>

      <div className="h-[170px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={statisticsData}>
            <CartesianGrid
              strokeDasharray="2 2"
              vertical={false}
              stroke="#f1f1f1"
            />

            <XAxis
              dataKey="day"
              tick={{ fontSize: 8, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 8, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
              width={20}
            />

            <Tooltip
              contentStyle={{
                fontSize: 9,
                borderRadius: 8,
                border: "none",
              }}
            />

            <Bar
              dataKey="income"
              stackId="a"
              fill="#28b36a"
              radius={[4, 4, 0, 0]}
              barSize={7}
            />

            <Bar
              dataKey="expense"
              stackId="a"
              fill="#44c9b4"
              radius={[4, 4, 0, 0]}
              barSize={7}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-1 flex justify-center gap-4 text-[8px] text-gray-400">
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#28b36a]" />
          Income
        </span>

        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#44c9b4]" />
          Expense
        </span>
      </div>
    </div>
  );
}

export default StatisticsChart;