
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  CalendarDays,
  ChevronDown,
} from "lucide-react";

import { statisticsData } from "../../data/mockDashboardData";

function StatisticsChart() {
  return (
    <section className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-700">
          Statistics
        </h2>

        <button className="flex items-center gap-1.5 rounded-md border border-gray-100 px-2 py-1.5 text-[9px] text-gray-500">
          <CalendarDays size={11} />

          19 Aug - 25 Aug

          <ChevronDown size={11} />
        </button>
      </div>

      
      <div className="h-[220px] w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={statisticsData}
            margin={{
              top: 10,
              right: 5,
              left: -20,
              bottom: 0,
            }}
            barGap={2}
          >
            <CartesianGrid
              stroke="#f1f3f5"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fontSize: 9,
                fill: "#9ca3af",
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fontSize: 9,
                fill: "#9ca3af",
              }}
              axisLine={false}
              tickLine={false}
              ticks={[0, 100, 200, 300, 400]}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                fontSize: "10px",
              }}
            />

            <Bar
              dataKey="sales"
              name="Sales"
              fill="#159447"
              radius={[3, 3, 0, 0]}
              barSize={8}
            />

            <Bar
              dataKey="expense"
              name="Expense"
              fill="#3fc4b1"
              radius={[3, 3, 0, 0]}
              barSize={8}
            />

            <Bar
              dataKey="profit"
              name="Profit"
              fill="#f4c77a"
              radius={[3, 3, 0, 0]}
              barSize={8}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      
      <div className="mt-1 flex justify-center gap-4">
        <LegendItem
          color="bg-[#159447]"
          label="Sales"
        />

        <LegendItem
          color="bg-[#3fc4b1]"
          label="Expense"
        />

        <LegendItem
          color="bg-[#f4c77a]"
          label="Profit"
        />
      </div>
    </section>
  );
}

interface LegendItemProps {
  color: string;
  label: string;
}

function LegendItem({
  color,
  label,
}: LegendItemProps) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className={`h-2 w-2 rounded-full ${color}`}
      />

      <span className="text-[9px] text-gray-400">
        {label}
      </span>
    </div>
  );
}

export default StatisticsChart;