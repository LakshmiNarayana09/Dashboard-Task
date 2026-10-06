import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { analyticsData } from "../../data/mockDashboardData";

function ComparisonChart() {
  const data = analyticsData.map((item) => ({
    ...item,
    expense: -item.expense,
  }));

  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-gray-700">
          Statistics
        </h2>

        <div className="flex items-center gap-3 text-[8px] text-gray-400">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#229447]" />
            Income
          </span>

          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#44c9b4]" />
            Expense
          </span>
        </div>
      </div>

      <div className="mt-2 h-[145px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              left: 5,
              right: 5,
            }}
          >
            <CartesianGrid
              horizontal={false}
              stroke="#f1f1f1"
            />

            <XAxis
              type="number"
              domain={[-300, 300]}
              tick={{ fontSize: 7, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              type="category"
              dataKey="day"
              tick={{ fontSize: 7, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
              width={15}
            />

            <Tooltip
              contentStyle={{
                fontSize: 9,
                border: "none",
                borderRadius: 8,
              }}
            />

            <Bar
              dataKey="income"
              fill="#229447"
              radius={[5, 0, 0, 5]}
              barSize={6}
            />

            <Bar
              dataKey="expense"
              fill="#44c9b4"
              radius={[0, 5, 5, 0]}
              barSize={6}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ComparisonChart;