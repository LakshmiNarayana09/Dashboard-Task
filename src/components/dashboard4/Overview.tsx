
import SummaryCards from "./SummaryCards";
import StatisticsChart from "./StatisticsChart";
import AnalyticsChart from "./AnalyticsChart";
import TrafficCard from "./TrafficCard";
import OnlineUsers from "./OnlineUsers";

function Overview() {
  return (
    <main className="min-h-screen bg-[#f7f8f9] p-4 sm:p-5 lg:p-6">
      
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-semibold text-gray-700">
          Overview
        </h1>

        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-500 shadow-sm">
            ↓
          </button>

          <button className="flex h-8 items-center gap-2 rounded-lg border border-gray-100 bg-white px-3 text-[9px] text-gray-500 shadow-sm">
            Last 7 days

            <span>⌄</span>
          </button>
        </div>
      </div>

      
      <SummaryCards />

      
      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
        
        <StatisticsChart />

        <AnalyticsChart />

      </div>

      
      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(260px,0.9fr)]">
        
        <TrafficCard />

        <OnlineUsers />

      </div>
    </main>
  );
}

export default Overview;