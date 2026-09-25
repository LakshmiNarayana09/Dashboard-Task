
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { followersGrowthData, followersGrowthSummary } from "../../data/dashboardData";

function FollowersGrowth() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-gray-700">
          Followers Growth
        </h2>

        <select className="rounded-md bg-gray-50 px-2 py-1 text-[7px] text-gray-500 outline-none">
          <option>19 Aug - 25 Aug</option>
        </select>
      </div>

      <div className="mt-3 flex gap-8">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e9f8ee] text-[10px] text-[#28a452]">
            ↑
          </span>

          <div>
            <p className="text-[8px] text-gray-700">
              {followersGrowthSummary.currentWeek}
            </p>

            <p className="text-[6px] text-gray-400">
              Current Week
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e8faf7] text-[10px] text-[#40c9b5]">
            ↓
          </span>

          <div>
            <p className="text-[8px] text-gray-700">
              {followersGrowthSummary.lastWeek}
            </p>

            <p className="text-[6px] text-gray-400">
              Last Week
            </p>
          </div>
        </div>
      </div>

      <div className="mt-1 h-[125px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={followersGrowthData}>
            <CartesianGrid
              stroke="#eeeeee"
              strokeDasharray="2 2"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fontSize: 7,
                fill: "#9ca3af",
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fontSize: 7,
                fill: "#9ca3af",
              }}
              axisLine={false}
              tickLine={false}
              width={22}
            />

            <Tooltip
              contentStyle={{
                fontSize: 8,
                border: "none",
                borderRadius: 8,
              }}
            />

            <Bar
              dataKey="current"
              fill="#229447"
              radius={[5, 5, 5, 5]}
              barSize={11}
            />

            <Bar
              dataKey="previous"
              fill="#dff1e5"
              radius={[5, 5, 5, 5]}
              barSize={11}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default FollowersGrowth;