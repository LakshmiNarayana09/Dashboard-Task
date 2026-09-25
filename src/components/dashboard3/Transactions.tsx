
import {
  ShoppingBag,
  Plane,
  Utensils,
  Gamepad2,
} from "lucide-react";

import { dashboardTransactionsData } from "../../data/dashboardData";

function Transactions() {
  return (
    <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-700">
          Transactions
        </h2>

        <button
          type="button"
          className="text-[9px] text-green-500"
        >
          See all
        </button>
      </div>

      <div className="space-y-4">
        {dashboardTransactionsData.map((transaction) => {
          const Icon =
            transaction.type === "shopping"
              ? ShoppingBag
              : transaction.type === "travel"
                ? Plane
                : transaction.type === "food"
                  ? Utensils
                  : transaction.type === "sport"
                    ? Gamepad2
                    : ShoppingBag;

          return (
            <div
              key={transaction.title}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full ${transaction.color}`}
                >
                  <Icon
                    size={13}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-medium text-gray-700">
                    {transaction.title}
                  </p>

                  <p className="text-[8px] text-gray-400">
                    {transaction.date}
                  </p>
                </div>
              </div>

              <span className="text-[9px] font-medium text-gray-600">
                {transaction.amount}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Transactions;

