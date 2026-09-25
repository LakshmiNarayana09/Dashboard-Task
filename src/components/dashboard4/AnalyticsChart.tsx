
import {
  LineChart,
  Line,
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

import { analyticsData } from "../../data/dashboardData";

function AnalyticsChart() {
  return (
    <section className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
     
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-700">
          Analytics
        </h2>

        <button className="flex items-center gap-1.5 rounded-md border border-gray-100 px-2 py-1.5 text-[9px] text-gray-500">
          <CalendarDays size={11} />

          19 Aug - 25 Aug

          <ChevronDown size={11} />
        </button>
      </div>

      
      <div className="mb-2 flex gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eafaf6] text-[9px] text-emerald-500">
            ↑
          </span>

          <span className="text-[10px] text-gray-600">
            $5.850
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eafaf6] text-[9px] text-teal-500">
            ↓
          </span>

          <span className="text-[10px] text-gray-600">
            $1.750
          </span>
        </div>
      </div>

      
      <div className="h-[175px] w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart
            data={analyticsData}
            margin={{
              top: 5,
              right: 4,
              left: -25,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#f1f3f5"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fontSize: 8,
                fill: "#9ca3af",
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={false}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                border: "none",
                borderRadius: "8px",
                fontSize: "10px",
              }}
            />

            <Line
              type="monotone"
              dataKey="income"
              name="Income"
              stroke="#159447"
              strokeWidth={2}
              dot={{
                r: 2,
                fill: "#159447",
              }}
              activeDot={{
                r: 4,
              }}
            />

            <Line
              type="monotone"
              dataKey="expense"
              name="Expense"
              stroke="#42c5b2"
              strokeWidth={1.5}
              dot={{
                r: 2,
                fill: "#42c5b2",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default AnalyticsChart;