
import {
  User,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface ProfileProps {
  onClose?: () => void;
}

function Profile({ onClose }: ProfileProps) {
  return (
    <div className="absolute right-0 top-[52px] z-50 w-[260px] overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      
      <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9a48b] text-sm font-semibold text-white">
          A
        </div>

        <div className="min-w-0">
          <p className="truncate font-['Poppins'] text-[14px] font-medium text-[#3f434a]">
            ArtTemplate
          </p>

          <p className="truncate font-['Poppins'] text-[11px] text-[#8a9099]">
            arttemplate@gmail.com
          </p>
        </div>
      </div>

     
      <div className="p-2">
        <NavLink
          to="/profile"
          onClick={onClose}
          className="flex items-center justify-between rounded-lg px-3 py-3 transition hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <User size={17} className="text-[#8a9099]" />

            <span className="font-['Poppins'] text-[13px] text-[#3f434a]">
              My Profile
            </span>
          </div>

          <ChevronRight size={15} className="text-[#8a9099]" />
        </NavLink>


        <NavLink
          to="/message"
          onClick={onClose}
          className="flex items-center justify-between rounded-lg px-3 py-3 transition hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <User size={17} className="text-[#8a9099]" />

            <span className="font-['Poppins'] text-[13px] text-[#3f434a]">
              My Message
            </span>
          </div>

          <ChevronRight size={15} className="text-[#8a9099]" />
        </NavLink>

        <NavLink
          to="/tasks"
          onClick={onClose}
          className="flex items-center justify-between rounded-lg px-3 py-3 transition hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <User size={17} className="text-[#8a9099]" />

            <span className="font-['Poppins'] text-[13px] text-[#3f434a]">
              My Tasks
            </span>
          </div>

          <ChevronRight size={15} className="text-[#8a9099]" />
        </NavLink>

        <NavLink
          to="/settings"
          onClick={onClose}
          className="flex items-center justify-between rounded-lg px-3 py-3 transition hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <Settings size={17} className="text-[#8a9099]" />

            <span className="font-['Poppins'] text-[13px] text-[#3f434a]">
              Settings
            </span>
          </div>

          <ChevronRight size={15} className="text-[#8a9099]" />
        </NavLink>

        <button
          type="button"
          onClick={onClose}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition hover:bg-red-50"
        >
          <LogOut size={17} className="text-red-500" />

          <span className="font-['Poppins'] text-[13px] text-red-500">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}

export default Profile;