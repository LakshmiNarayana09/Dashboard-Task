
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { visitsData, visitsSummary} from "../../data/mockDashboardData";

function VisitsChart() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">
      
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-gray-700">
          Visits
        </h2>

        <select className="rounded-md bg-gray-50 px-2 py-1 text-[7px] text-gray-500 outline-none">
          <option>19 Aug - 25 Aug</option>
        </select>
      </div>

     
      <div className="mt-3 flex gap-5">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e9f8ee] text-[#28a452]">
            ↓
          </div>

          <div>
            <p className="text-[8px] text-gray-700">
              {visitsSummary.min}
            </p>

            <p className="text-[6px] text-gray-400">
              Min. Visits
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#edf7f3] text-gray-500">
            =
          </div>

          <div>
            <p className="text-[8px] text-gray-700">
              {visitsSummary.average}
            </p>

            <p className="text-[6px] text-gray-400">
              Avg. Visits
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e9f8ee] text-[#28a452]">
            ↑
          </div>

          <div>
            <p className="text-[8px] text-gray-700">
              {visitsSummary.max}
            </p>

            <p className="text-[6px] text-gray-400">
              Max. Visits
            </p>
          </div>
        </div>
      </div>

      
      <div className="mt-2 h-[145px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={visitsData}>
            <defs>
              <linearGradient
                id="visitGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#2ba24d"
                  stopOpacity={0.12}
                />

                <stop
                  offset="100%"
                  stopColor="#2ba24d"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

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

            <Area
              type="monotone"
              dataKey="visits"
              stroke="#229447"
              strokeWidth={1.5}
              fill="url(#visitGradient)"
              dot={{
                r: 2,
                fill: "#229447",
              }}
              activeDot={{
                r: 4,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default VisitsChart;