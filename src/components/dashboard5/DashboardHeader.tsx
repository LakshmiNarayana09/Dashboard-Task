
import { Bell, Download, Settings} from "lucide-react";

function DashboardHeader() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-gray-100 bg-white px-5 lg:px-7">
      
      <div>
        <h1 className="text-[13px] font-medium text-gray-400">
          Overview
        </h1>
      </div>

     
      <div className="flex items-center gap-4">
        
        <button className="hidden rounded-md border border-gray-200 p-2 text-gray-400 hover:bg-gray-50 sm:block">
          <Download size={13} />
        </button>

        
        <button className="hidden rounded-md bg-[#159447] px-4 py-2 text-[9px] font-medium text-white hover:bg-[#12813d] sm:block">
          Add Task
        </button>

        
        <button className="relative text-gray-400">
          <Bell size={17} />

          <span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-red-400" />
        </button>

        
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8c0aa] text-[10px] font-semibold text-white">
            A
          </div>

          <div className="hidden leading-tight md:block">
            <p className="text-[10px] font-medium text-gray-700">
              ArtTemplate
            </p>

            <p className="text-[8px] text-gray-400">
              example@gmail.com
            </p>
          </div>

          <Settings
            size={13}
            className="text-gray-400"
          />
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;