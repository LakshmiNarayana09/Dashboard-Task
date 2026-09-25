
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";

import { salesData } from "../../data/dashboardData";



function SalesChart() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-gray-700">
          Sales
        </h2>

        <button className="text-gray-400">•••</button>
      </div>

      <div className="relative mx-auto mt-2 h-[120px] w-[120px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={salesData}
              dataKey="value"
              innerRadius={42}
              outerRadius={55}
              startAngle={90}
              endAngle={-270}
              paddingAngle={1}
            >
              <Cell fill="#229447" />
              <Cell fill="#4bc9b5" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm font-medium text-gray-600">
            3.500
          </span>
          <span className="text-[8px] text-gray-400">
            Total
          </span>
        </div>
      </div>

      <div className="mt-2 space-y-2 text-[8px]">
        <div className="flex justify-between">
          <span className="flex items-center gap-1 text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#229447]" />
            Current Week
          </span>

          <span className="text-gray-500">2.500</span>

          <span className="text-[#25a452]">18.8%</span>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-1 text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4bc9b5]" />
            Last Week
          </span>

          <span className="text-gray-500">1.000</span>

          <span className="text-red-400">-15.8%</span>
        </div>
      </div>
    </div>
  );
}

export default SalesChart;