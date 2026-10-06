
import { MoreHorizontal } from "lucide-react";

import { activities } from "../../data/mockDashboardData";

function RecentActivity() {
  return (
    <section className="bg-white">
      
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <h2 className="text-[12px] font-medium text-gray-700">
          Recent Activity
        </h2>

        <button>
          <MoreHorizontal
            size={14}
            className="text-gray-400"
          />
        </button>
      </div>

      
      <div className="max-h-[560px] overflow-y-auto px-5 py-2">
        {activities.map((activity) => (
          <div key={activity.id}>
            
            {activity.date && (
              <p className="mb-3 mt-3 text-[7px] text-gray-300">
                {activity.date}
              </p>
            )}

            
            <div className="mb-4 flex gap-3">
              <span className="w-7 shrink-0 text-[7px] font-medium text-gray-500">
                {activity.time}
              </span>

              <div className="relative flex-1 border-l border-gray-100 pl-3">
                
                <div className="absolute -left-[3px] top-1 h-[5px] w-[5px] rounded-full bg-[#32b76b]" />

                <p className="text-[7px] text-gray-400">
                  {activity.user}
                </p>

                <p className="mt-0.5 text-[7px] text-gray-400">
                  {activity.action}{" "}
                  <span className="font-medium text-[#32b76b]">
                    {activity.project}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentActivity;