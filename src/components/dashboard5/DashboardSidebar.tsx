
import {
  CalendarDays,
  ClipboardList,
  Contact,
  FileText,
  Folder,
  Layers3,
  Mail,
  MessageSquare,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function DashboardSidebar() {
  const menuItems = [
    {
      icon: ShoppingBag,
      label: "Products",
      path: "/ecommerce/products",
    },
    {
      icon: ShoppingCart,
      label: "Orders",
      path: "/ecommerce/orders",
    },
    {
      icon: Users,
      label: "Customers",
      path: "/ecommerce/customers",
    },
    {
      icon: ClipboardList,
      label: "Tasks",
      path: "/task",
    },
    {
      icon: MessageSquare,
      label: "Chat",
      path: "/chat",
    },
    {
      icon: CalendarDays,
      label: "Calendar",
      path: "/calendar",
    },
    {
      icon: Mail,
      label: "Mail",
      path: "/mail",
    },
    {
      icon: Layers3,
      label: "Projects",
      path: "/projects",
    },
    {
      icon: Folder,
      label: "File Manager",
      path: "/file-manager",
    },
    {
      icon: FileText,
      label: "Notes",
      path: "/notes",
    },
    {
      icon: Contact,
      label: "Contacts",
      path: "/contacts",
    },
  ];

  return (
    <aside className="hidden w-[40px] shrink-0 bg-white lg:block">
      <div className="flex min-h-screen flex-col items-center">
        
        <nav className="flex w-full flex-col items-center pt-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                title={item.label}
                className={({ isActive }) =>
                  `
                  group relative flex h-[42px] w-full
                  items-center justify-center
                  transition-all duration-200

                  ${
                    isActive
                      ? "bg-[#f1f8f5] text-[#159447]"
                      : "text-[#9ca3af] hover:bg-gray-50 hover:text-[#159447]"
                  }
                `
                }
              >
                {({ isActive }) => (
                  <>
                    
                    {isActive && (
                      <span
                        className="
                          absolute left-0
                          h-6 w-[2px]
                          rounded-r-full
                          bg-[#159447]
                        "
                      />
                    )}

                    <Icon
                      size={15}
                      strokeWidth={1.5}
                    />

                    
                    <span
                      className="
                        pointer-events-none
                        absolute left-11 z-50
                        hidden whitespace-nowrap
                        rounded-md
                        bg-gray-800
                        px-2 py-1
                        text-[9px]
                        text-white
                        shadow-lg
                        group-hover:block
                      "
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default DashboardSidebar;