import { useState } from "react";

const tabs = [
  {
    label: "All",
  },
  {
    label: "Started",
  },
  {
    label: "On Hold",
  },
  {
    label: "Completed",
  },
];

function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="mt-5 flex items-center gap-6 overflow-x-auto border-b border-gray-100">
      {tabs.map((tab) => {
        const active = activeTab === tab.label;

        return (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActiveTab(tab.label)}
            className={`
              relative flex shrink-0 items-center gap-2
              pb-3 text-[10px] transition-colors
              ${
                active
                  ? "font-medium text-gray-700"
                  : "text-gray-400 hover:text-gray-600"
              }
            `}
          >
            {tab.label}

            {active && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-green-500" />
            )}
          </button>
        );
      })}
    </div>
  );
}

export default ProjectTabs;