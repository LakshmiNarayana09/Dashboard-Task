
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { MoreHorizontal } from "lucide-react";

import { onlineUsersData } from "../../data/mockDashboardData";

const COLORS = [
  "#22a447",
  "#f6c84c",
  "#42c5b2",
];

function OnlineUsers() {
  return (
    <section className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
      
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] font-semibold text-gray-700">
          Online Users
        </h2>

        <MoreHorizontal
          size={14}
          className="text-gray-400"
        />
      </div>

      
      <div className="relative mx-auto mt-2 h-[150px] w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={onlineUsersData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={48}
              outerRadius={62}
              startAngle={90}
              endAngle={-270}
              paddingAngle={2}
              stroke="none"
            >
              {onlineUsersData.map(
                (_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                  />
                )
              )}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-semibold text-gray-600">
            1,883
          </span>

          <span className="text-[8px] text-gray-400">
            Online
          </span>
        </div>
      </div>

      
      <div className="space-y-2">
        {onlineUsersData.map(
          (item, index) => (
            <div
              key={item.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor:
                      COLORS[index],
                  }}
                />

                <span className="text-[9px] text-gray-500">
                  {item.name}
                </span>
              </div>

              <span className="text-[9px] font-medium text-gray-600">
                {item.value}%
              </span>
            </div>
          )
        )}
      </div>

      
      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-gray-100 pt-4 text-center">
        <div>
          <p className="text-sm font-semibold text-gray-600">
            350
          </p>

          <p className="text-[8px] text-gray-400">
            Web
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-600">
            895
          </p>

          <p className="text-[8px] text-gray-400">
            iOS
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-600">
            638
          </p>

          <p className="text-[8px] text-gray-400">
            Android
          </p>
        </div>
      </div>
    </section>
  );
}

export default OnlineUsers;