
import { MoreHorizontal } from "lucide-react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

import { balanceData, balanceSummary } from "../../data/mockDashboardData";

function BalanceCard() {
  return (
    <section className="overflow-hidden rounded-xl bg-[#16a34a] p-4 text-white">
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-sm font-semibold">
          Balance
        </h2>

        <MoreHorizontal size={18} />
      </div>

      <p className="text-2xl font-semibold">
        {balanceSummary.balance}
      </p>

      <div className="mt-1 flex gap-4 text-[8px]">
        <span>
          Income{" "}
          <strong>{balanceSummary.income}</strong>
        </span>

        <span>
          Expense{" "}
          <strong>{balanceSummary.expense}</strong>
        </span>
      </div>

      
      <div className="relative mt-8 h-20">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={balanceData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <Line
              type="monotone"
              dataKey="value"
              stroke="white"
              strokeWidth={1.5}
              strokeOpacity={0.9}
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between text-[8px] opacity-80">
        <span>
          Income: {balanceSummary.incomeBottom}
        </span>

        <span>
          Spending: {balanceSummary.spendingBottom}
        </span>
      </div>
    </section>
  );
}

export default BalanceCard;

