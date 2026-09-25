
import { transactionsData } from "../../data/dashboardData";

function Transactions() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-gray-700">
          Transactions
        </h2>

        <button className="text-gray-400">•••</button>
      </div>

      <div className="space-y-3">
        {transactionsData.map((transaction) => (
          <div
            key={transaction.name}
            className="flex items-center gap-2"
          >
            <div className="h-6 w-6 shrink-0 rounded-full bg-[#dc927d]" />

            <div className="min-w-0 flex-1">
              <p className="truncate text-[8px] font-medium text-gray-600">
                {transaction.name}
              </p>

              <p className="text-[7px] text-gray-400">
                {transaction.time}
              </p>
            </div>

            <div className="text-right">
              <p
                className={`text-[8px] font-medium ${
                  transaction.amount.startsWith("+")
                    ? "text-[#28a458]"
                    : "text-red-400"
                }`}
              >
                {transaction.amount}
              </p>

              <p className="text-[7px] text-gray-400">
                {transaction.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;