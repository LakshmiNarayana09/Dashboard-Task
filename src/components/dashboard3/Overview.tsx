
import SummaryCards from "./SummaryCards";
import Statistics from "./Statistics";
import BalanceCard from "./BalanceCard";
import MyCards from "./MyCards";
import Transactions from "./Transactions";

function Overview() {
  return (
    <main className="min-h-screen bg-[#f8faf9] p-4 sm:p-5 lg:p-6">
      
      <SummaryCards />

      
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.8fr)]">
        
        
        <div className="space-y-4">
          <Statistics />
          <MyCards />
        </div>

        
        <div className="space-y-4">
          <BalanceCard />
          <Transactions />
        </div>

      </div>
    </main>
  );
}

export default Overview;