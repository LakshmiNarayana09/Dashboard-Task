
import {
  Bell,
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Notifications from "./Notifications";
import Profile from "./Profile";

interface HeaderProps {
  onMenuClick?: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] =
    useState(false);
  
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);

    onMenuClick?.();
  };

  const handleNotificationClick = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  const menuItems = [
    {
      label: "Settings",
      path: "/settings",
    },
    {
      label: "Activity",
      path: "/activity",
    },
    {
      label: "Users",
      path: "/users",
    },
  ];

  return (
    <header className="relative flex h-[64px] items-center justify-between border-b border-gray-100 bg-white px-4 sm:px-6">
      
      <div className="flex items-center gap-3">
        
        <button
          type="button"
          onClick={handleMenuClick}
          className="rounded-md p-2 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={18} />
          ) : (
            <Menu size={18} />
          )}
        </button>

        
        {isMenuOpen && (
          <nav className="flex items-center gap-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-[10px] font-medium transition ${
                    isActive
                      ? "bg-[#eaf8ee] text-[#229447]"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>

      
      <div className="ml-auto flex items-center gap-3">
        
        <button
          type="button"
          className="rounded-full p-2 text-gray-400 transition hover:bg-gray-50"
          aria-label="Search"
        >
          <Search size={15} />
        </button>

        
        <div className="relative">
          <button
            type="button"
            onClick={handleNotificationClick}
            className="relative rounded-full p-2 text-gray-400 transition hover:bg-gray-50"
            aria-label="Notifications"
          >
            <Bell size={15} />

            
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
          </button>

          
          {isNotificationOpen && (
            <Notifications
              onClose={() => setIsNotificationOpen(false)}
            />
          )}
        </div>

        
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsProfileOpen((prev) => !prev)}
            className="flex items-center gap-2"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9a48b] text-[9px] font-semibold text-white">
              A
            </div>

            <span className="hidden text-[10px] font-medium text-gray-700 sm:block">
              ArtTemplate
            </span>

            <ChevronDown
              size={11}
              className={`text-gray-400 transition-transform ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProfileOpen && (
            <Profile onClose={() => setIsProfileOpen(false)} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

