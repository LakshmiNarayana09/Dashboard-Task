
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";

import { followersData, followersTotal } from "../../data/mockDashboardData";

const colors = [
  "#28b36a",
  "#f4c438",
  "#42c8b5",
  "#ff706b",
];

function FollowersChart() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-gray-700">
          Followers
        </h2>

        <button className="text-[10px] text-gray-400">
          •••
        </button>
      </div>

      <div className="relative mx-auto mt-3 h-[125px] w-[125px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={followersData}
              dataKey="value"
              innerRadius={38}
              outerRadius={50}
              startAngle={90}
              endAngle={-270}
              paddingAngle={1}
            >
              {followersData.map((item, index) => (
                <Cell
                  key={item.name}
                  fill={colors[index]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[14px] font-medium text-gray-600">
            {followersTotal}
          </span>

          <span className="text-[7px] text-gray-400">
            Total
          </span>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
        {followersData.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-[7px]"
          >
            <span className="flex items-center gap-1 text-gray-500">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: colors[index],
                }}
              />

              {item.name}
            </span>

            <span className="text-gray-500">
              {(item.value / 1000).toFixed(1)}k
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowersChart;