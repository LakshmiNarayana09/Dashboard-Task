
import Header from "../../components/dashboard2/Header";
import ProfileSidebar from "../../components/dashboard2/ProfileSidebar";
import DashboardStats from "../../components/dashboard2/DashboardStats";
import VisitsChart from "../../components/dashboard2/VisitsChart";
import FollowersChart from "../../components/dashboard2/FollowersChart";
import FollowersGrowth from "../../components/dashboard2/FollowersGrowth";
import NewFollowers from "../../components/dashboard2/NewFollowers";

import { Download } from "lucide-react";


function Overview() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <div className="flex min-h-screen">
        
        <aside className="w-[240px] shrink-0 bg-white">
          <ProfileSidebar />
        </aside>

        
        <div className="flex min-w-0 flex-1 flex-col">
          
          <Header />

          
          <main className="min-w-0 flex-1 p-4 sm:p-5">
            
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-[15px] font-medium text-gray-700">
                Overview
              </h1>

              <div className="flex items-center gap-2">
                
                <button
                  type="button"
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-gray-400 shadow-sm transition hover:bg-gray-50"
                >
                  <Download size={11} />
                </button>

                
                <select
                  defaultValue="7"
                  className="h-7 rounded-md bg-white px-2 text-[7px] text-gray-500 shadow-sm outline-none"
                >
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 90 days</option>
                </select>
              </div>
            </div>

            
            <DashboardStats />

            
            <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-[1.65fr_0.9fr]">
              <VisitsChart />
              <FollowersChart />
            </div>

            
            <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-[1.3fr_1fr]">
              <FollowersGrowth />
              <NewFollowers />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Overview
