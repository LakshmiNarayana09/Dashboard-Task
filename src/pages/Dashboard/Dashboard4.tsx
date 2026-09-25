
import Sidebar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import Overview from "../../components/dashboard4/Overview";

function Dashboard4() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <Sidebar />
      
      <div className="flex min-w-0 flex-1 flex-col">
       
        <Header />

        <main className="flex-1 p-4 sm:p-6">
          <Overview />
        </main>

      </div>

    </div>
  );
}

export default Dashboard4;
