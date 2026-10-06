
import { summaryCardsData } from "../../data/mockDashboardData";

function SummaryCards() {
  return (
    <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3">
      {summaryCardsData.map((card) => (
        <div
          key={card.title}
          className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0_1px_4px_rgba(0,0,0,0.03)]"
        >
          <div className="flex items-end justify-between">
            <div>
              <p className="mb-1 text-[10px] text-gray-400">
                {card.title}
              </p>

              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-800">
                  {card.amount}
                </h2>

                <span
                  className={`text-[9px] ${
                    card.positive
                      ? "text-green-500"
                      : "text-red-400"
                  }`}
                >
                  {card.positive ? "↑" : "↓"} {card.change}
                </span>
              </div>
            </div>

            
            <div className="flex h-8 items-end gap-[3px]">
              {card.bars.map((height, index) => (
                <div
                  key={index}
                  className={`w-[3px] rounded-full ${
                    card.positive
                      ? "bg-emerald-400"
                      : "bg-cyan-400"
                  }`}
                  style={{
                    height: `${height / 2.2}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;

