
import {
  BarChart3,
  DollarSign,
  UserRound,
} from "lucide-react";

import { summaryCards } from "../../data/mockDashboardData";

function SummaryCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {summaryCards.map((card) => {
        const Icon =
          card.icon === "money"
            ? DollarSign
            : card.icon === "chart"
              ? BarChart3
              : UserRound;

        return (
          <div
            key={card.title}
            className="flex min-h-[84px] items-center justify-between rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-sm"
          >
            <div>
              <p className="text-[10px] text-gray-400">
                {card.title}
              </p>

              <div className="mt-1 flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-700">
                  {card.value}
                </h2>

                <span
                  className={`text-[9px] ${
                    card.positive
                      ? "text-emerald-500"
                      : "text-red-400"
                  }`}
                >
                  {card.positive ? "↑" : "↓"}{" "}
                  {card.change}
                </span>
              </div>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eafaf6]">
              <Icon
                size={21}
                className="text-[#45c7b3]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SummaryCards;