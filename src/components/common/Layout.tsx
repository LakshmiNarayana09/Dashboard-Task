import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="min-w-0 flex-1">
        
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="m-3 rounded-md p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>

      </div>
    </div>
  );
}

export default Layout;


