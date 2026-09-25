
import { MoreHorizontal } from "lucide-react";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { projects } from "../../data/dashboard5Data";

function ProjectsCard() {
  return (
    <section className="rounded-[5px] border border-gray-100 bg-white p-4">
      
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-[11px] font-semibold text-gray-600">
          Projects
        </h2>

        <button>
          <MoreHorizontal
            size={14}
            className="text-gray-400"
          />
        </button>
      </div>

      
      <div className="relative h-[145px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={projects}
              dataKey="value"
              startAngle={220}
              endAngle={-40}
              innerRadius={47}
              outerRadius={53}
              paddingAngle={3}
              stroke="none"
            >
              {projects.map((project) => (
                <Cell
                  key={project.name}
                  fill={project.color}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                fontSize: "10px",
                borderRadius: "6px",
                border: "1px solid #eee",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[18px] font-medium text-gray-600">
            830
          </span>

          <span className="text-[7px] text-gray-400">
            Projects
          </span>
        </div>
      </div>

      
      <div className="grid grid-cols-3 border-t border-gray-100 pt-3">
        <div className="text-center">
          <p className="text-[13px] font-medium text-gray-600">
            420
          </p>

          <p className="text-[7px] text-gray-400">
            Ongoing
          </p>
        </div>

        <div className="border-x border-gray-100 text-center">
          <p className="text-[13px] font-medium text-gray-600">
            210
          </p>

          <p className="text-[7px] text-gray-400">
            In progress
          </p>
        </div>

        <div className="text-center">
          <p className="text-[13px] font-medium text-gray-600">
            200
          </p>

          <p className="text-[7px] text-gray-400">
            Done
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectsCard;