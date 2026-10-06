
import { MoreHorizontal } from "lucide-react";

import { activeTasks } from "../../data/mockDashboardData";

function ActiveTasks() {
  return (
    <section className="rounded-[5px] border border-gray-100 bg-white p-4">
      
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[11px] font-semibold text-gray-600">
          Active Tasks
        </h2>

        <div className="flex overflow-hidden rounded-md border border-gray-100">
          <button className="bg-[#159447] px-3 py-1 text-[8px] text-white">
            Day
          </button>

          <button className="px-3 py-1 text-[8px] text-gray-400">
            Week
          </button>

          <button className="px-3 py-1 text-[8px] text-gray-400">
            Month
          </button>
        </div>
      </div>

      
      <div className="space-y-3">
        {activeTasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-2 border-b border-gray-50 pb-2 last:border-0"
          >
            
            <div
              className="h-7 w-1 rounded-full"
              style={{
                backgroundColor: task.color,
              }}
            />

            
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[7px] font-medium text-gray-500">
              {task.initials}
            </div>

            
            <div className="min-w-0 flex-1">
              <p className="text-[8px] text-gray-400">
                {task.user}
              </p>

              <p className="truncate text-[8px] text-gray-500">
                {task.action}{" "}
                <span className="font-medium text-gray-600">
                  {task.project}
                </span>
              </p>
            </div>

            
            <button>
              <MoreHorizontal
                size={12}
                className="text-gray-300"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActiveTasks;