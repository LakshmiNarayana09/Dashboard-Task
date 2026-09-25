
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

import StatisticsSection from "./StatisticsSection";
import ProjectsCard from "./ProjectsCard";
import ActiveTasks from "./ActiveTasks";
import PostingTasks from "./PostingTasks";
import Calendar from "./Calendar";
import RecentActivity from "./RecentActivity";

function Overview() {
  return (
    <div className="min-h-screen bg-[#f1f2f3]">
      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        
        <DashboardSidebar />

        
        <div className="min-w-0 flex-1">
          
          <DashboardHeader />

          
          <main className="p-4 lg:p-5">
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_285px]">
              
              <div className="min-w-0 space-y-4">
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <StatisticsSection />

                  <ProjectsCard />
                </div>

                
                <ActiveTasks />

                
                <PostingTasks />
              </div>

              
              <aside className="overflow-hidden rounded-[5px] border border-gray-100 bg-white">
                <Calendar />

                <RecentActivity />
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Overview;