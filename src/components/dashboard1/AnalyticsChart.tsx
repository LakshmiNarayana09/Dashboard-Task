
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { analyticsData } from "../../data/dashboardData";

function AnalyticsChart() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-gray-700">
          Analytics
        </h2>

        <select className="rounded-md border-none bg-gray-50 px-2 py-1 text-[8px] text-gray-500 outline-none">
          <option>19 Aug - 25 Aug</option>
        </select>
      </div>

      <div className="mt-2 flex gap-4 text-[8px] text-gray-500">
        <span className="flex items-center gap-1">
          <span className="rounded-full bg-[#e9f8ee] px-1.5 py-0.5 text-[#28a457]">
            ↑
          </span>
          $5,850
        </span>

        <span className="flex items-center gap-1">
          <span className="rounded-full bg-[#e8faf7] px-1.5 py-0.5 text-[#3dc3b2]">
            ↓
          </span>
          $1,750
        </span>
      </div>

      <div className="mt-1 h-[145px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={analyticsData}>
            <defs>
              <linearGradient
                id="analyticsGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#2daa59"
                  stopOpacity={0.18}
                />
                <stop
                  offset="100%"
                  stopColor="#2daa59"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="2 2"
              vertical={false}
              stroke="#f2f2f2"
            />

            <XAxis
              dataKey="day"
              tick={{ fontSize: 7, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis hide />

            <Tooltip
              contentStyle={{
                fontSize: 9,
                border: "none",
                borderRadius: 8,
              }}
            />

            <Area
              type="monotone"
              dataKey="income"
              stroke="#24a04a"
              strokeWidth={1.5}
              fill="url(#analyticsGradient)"
              dot={{
                r: 2,
                fill: "#24a04a",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsChart;