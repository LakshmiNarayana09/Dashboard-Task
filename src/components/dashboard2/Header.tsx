
import {
  Bell,
  ChevronDown,
  Search,
  Settings,
  Activity,
  Users,
  MessageCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import ChatDrawer from "./ChatDrawer";

function Header() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const menuItems = [
    {
      label: "Settings",
      path: "/settings",
      icon: Settings,
    },
    {
      label: "Activity",
      path: "/activity",
      icon: Activity,
    },
    {
      label: "Users",
      path: "/users",
      icon: Users,
    },
  ];

  return (
    <>
      <header className="relative z-40 flex h-[64px] items-center justify-between border-b border-gray-100 bg-white px-4 sm:px-6">
        
        <nav className="flex items-center gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 rounded-md px-3 py-2 text-[10px] font-medium transition ${
                    isActive
                      ? "bg-[#eaf8ee] text-[#229447]"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }`
                }
              >
                <Icon size={13} />
                {item.label}
              </NavLink>
            );
          })}

          
          <button
            type="button"
            onClick={() => setIsChatOpen((prev) => !prev)}
            className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-[10px] font-medium transition ${
              isChatOpen
                ? "bg-[#eaf8ee] text-[#229447]"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            }`}
          >
            <MessageCircle size={13} />
            Chat
          </button>
        </nav>

        
        <div className="flex items-center gap-3">
          
          <button
            type="button"
            className="rounded-full p-2 text-gray-400 transition hover:bg-gray-50"
          >
            <Search size={15} />
          </button>

          
          <button
            type="button"
            className="rounded-full p-2 text-gray-400 transition hover:bg-gray-50"
          >
            <Bell size={15} />
          </button>

          
          <button
            type="button"
            className="flex items-center gap-2 rounded-md p-1 transition hover:bg-gray-50"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9a48b] text-[9px] font-semibold text-white">
              A
            </div>

            <span className="hidden text-[10px] font-medium text-gray-700 sm:block">
              ArtTemplate
            </span>

            <ChevronDown
              size={11}
              className="text-gray-400"
            />
          </button>
        </div>
      </header>

      
      {isChatOpen && (
        <ChatDrawer
          onClose={() => setIsChatOpen(false)}
        />
      )}
    </>
  );
}

export default Header;