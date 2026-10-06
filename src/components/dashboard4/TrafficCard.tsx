
import { MoreHorizontal } from "lucide-react";
import { trafficData } from "../../data/mockDashboardData";

function TrafficCard() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {trafficData.map((item) => (
        <div
          key={item.title}
          className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm"
        >
          
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full ${item.iconBg}`}
              >
                <span className="text-xs">
                  {item.icon}
                </span>
              </div>

              <div>
                <p className="text-[9px] text-gray-400">
                  {item.title}
                </p>

                <p className="text-[10px] font-medium text-gray-600">
                  {item.name}
                </p>
              </div>
            </div>

            <MoreHorizontal
              size={14}
              className="text-gray-400"
            />
          </div>

          
          <div className="mt-3 flex justify-center">
            <div className="rounded-xl bg-[#fafafa] px-4 py-2">
              <span className="text-lg font-semibold text-gray-600">
                {item.value}
              </span>

              <span className="ml-1 text-[8px] text-gray-400">
                Sessions
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrafficCard;