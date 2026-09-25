
import {
  CircleDollarSign,
  Download,
  ShoppingBag,
  Users,
} from "lucide-react";


import StatCard from "../../components/dashboard1/StatCard";
import StatisticsChart from "../../components/dashboard1/StatisticsChart";
import AnalyticsChart from "../../components/dashboard1/AnalyticsChart";
import SalesChart from "../../components/dashboard1/SalesChart";
import ComparisonChart from "../../components/dashboard1/ComparisonChart";
import OrdersTable from "../../components/dashboard1/OrdersTable";
import Transactions from "../../components/dashboard1/Transactions";

function Overview() {
  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <div className="mx-auto flex min-h-screen max-w-[1440px] bg-[#f5f6f8]">

        <main className="min-w-0 flex-1">

          <div className="p-4 sm:p-6">
            
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h1 className="text-lg font-medium text-gray-800">
                  Overview
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-400 shadow-sm">
                  <Download size={13} />
                </button>

                <select className="h-8 rounded-lg border-none bg-white px-3 text-[9px] text-gray-500 shadow-sm outline-none">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
            </div>

           
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <StatCard
                title="Total Income"
                value="$8.500K"
                percentage="+10.8%"
                icon={CircleDollarSign}
              />

              <StatCard
                title="Total Sales"
                value="3.500K"
                percentage="-10.5%"
                positive={false}
                icon={ShoppingBag}
              />

              <StatCard
                title="New Customers"
                value="2.500K"
                percentage="+12.4%"
                icon={Users}
              />
            </div>

            
            <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-[1.2fr_0.8fr]">
              <StatisticsChart />
              <AnalyticsChart />
            </div>

            
            <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-[0.7fr_1.3fr]">
              <SalesChart />
              <ComparisonChart />
            </div>

            
            <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-[1.6fr_0.8fr]">
              <OrdersTable />
              <Transactions />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Overview
