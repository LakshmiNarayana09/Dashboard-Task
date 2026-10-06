
import {
  CalendarDays,
  ChevronDown,
  FileText,
  FolderKanban,
  LayoutDashboard,
  Mail,
  MessageCircle,
  NotebookTabs,
  ShoppingCart,
  Users,
  X,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCalendarFilter } from "../../context/CalendarFilterContext";
import { CALENDAR_CATEGORIES } from "../../data/mockCalendarData";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    label: "E-Commerce",
    icon: ShoppingCart,
    isEcommerce: true,
  },
  {
    label: "Task",
    icon: NotebookTabs,
    path: "/task",
  },
  {
    label: "Calendar",
    icon: CalendarDays,
    path: "/calendar",
  },
  {
    label: "Mail",
    icon: Mail,
    path: "/mail",
  },
  {
    label: "Chat",
    icon: MessageCircle,
    path: "/chat",
    notification: true,
  },
  {
    label: "Projects",
    icon: FolderKanban,
    path: "/projects",
  },
  {
    label: "File Manager",
    icon: FileText,
    path: "/file-manager",
  },
  {
    label: "Notes",
    icon: NotebookTabs,
    path: "/notes",
  },
  {
    label: "Contacts",
    icon: Users,
    path: "/contacts",
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isCalendarRoute = location.pathname.startsWith("/calendar");

  return (
    <>
  
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          w-[210px] shrink-0 border-r border-gray-100 bg-white
          lg:block
          ${
            isOpen
              ? "fixed inset-y-0 left-0 z-50 block"
              : "hidden"
          }
        `}
      >
        
        <div className="flex h-[64px] items-center gap-2 border-b border-gray-100 px-5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-teal-500 text-[11px] font-bold text-white">
            F
          </div>

          <span className="text-[11px] font-semibold tracking-wide text-gray-700">
            FLOWER
          </span>

          
          <button
            type="button"
            onClick={onClose}
            className="ml-auto text-gray-500 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={16} />
          </button>
        </div>

        
        <div className="px-3 pt-4">
          <div className="flex h-8 items-center rounded-md bg-gray-50 px-2 text-[10px] text-gray-400">
            <span className="mr-2">⌕</span>
            Search anything
          </div>
        </div>

        
        <div className="mt-5 px-3">
          <p className="mb-2 px-2 text-[8px] font-medium uppercase tracking-wider text-gray-400">
            Main Menu
          </p>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              
              if (item.isEcommerce) {
                return <EcommerceMenu key={item.label} />;
              }

              
              if (item.label === "Chat") {
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      navigate(item.path!);
                      onClose();
                    }}
                    className="relative flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[10px] text-gray-600 transition hover:bg-gray-50"
                  >
                    <Icon size={12} strokeWidth={1.8} />

                    <span className="flex-1">
                      {item.label}
                    </span>

                    {item.notification && (
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    )}
                  </button>
                );
              }

              
              return (
                <NavLink
                  key={item.label}
                  to={item.path ?? "/"}
                  end={item.path === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `relative flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[10px] transition ${
                      isActive
                        ? "bg-[#dff8d7] font-medium text-[#159447]"
                        : "text-gray-600 hover:bg-gray-50"
                    }`
                  }
                >
                  <Icon size={12} strokeWidth={1.8} />

                  <span className="flex-1">
                    {item.label}
                  </span>
                </NavLink>
              );
            })}
          </nav>

          {isCalendarRoute && <CalendarCategoriesSection />}
        </div>
      </aside>
    </>
  );
}

function CalendarCategoriesSection() {
  const { activeCategories, toggleCategory } = useCalendarFilter();

  return (
    <div className="mt-5">
      <p className="mb-2 px-2 text-[8px] font-medium uppercase tracking-wider text-gray-400">
        Calendars
      </p>

      <div className="space-y-1.5 px-2">
        {CALENDAR_CATEGORIES.map((category) => {
          const checked = activeCategories.includes(category.key);
          return (
            <label
              key={category.key}
              className="flex cursor-pointer items-center gap-2 text-[10px] text-gray-600"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleCategory(category.key)}
                className="h-2.5 w-2.5 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
              />
              <span className={`h-1.5 w-1.5 rounded-full ${category.colorClass}`} />
              {category.label}
            </label>
          );
        })}
      </div>
    </div>
  );
}

function EcommerceMenu() {
  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[10px] text-gray-600 transition hover:bg-gray-50"
      >
        <ShoppingCart size={12} strokeWidth={1.8} />

        <span className="flex-1">
          E-Commerce
        </span>

        <ChevronDown
          size={11}
          className="text-gray-400"
        />
      </button>

      <div className="ml-4 mt-1 space-y-1 border-l border-gray-100 pl-3">
        <NavLink
          to="/ecommerce/products"
          className={({ isActive }) =>
            `block rounded-md px-2 py-1.5 text-[9px] transition ${
              isActive
                ? "bg-[#dff8d7] font-medium text-[#159447]"
                : "text-gray-500 hover:bg-gray-50"
            }`
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/ecommerce/orders"
          className={({ isActive }) =>
            `block rounded-md px-2 py-1.5 text-[9px] transition ${
              isActive
                ? "bg-[#dff8d7] font-medium text-[#159447]"
                : "text-gray-500 hover:bg-gray-50"
            }`
          }
        >
          Orders
        </NavLink>

        <NavLink
          to="/ecommerce/customers"
          className={({ isActive }) =>
            `block rounded-md px-2 py-1.5 text-[9px] transition ${
              isActive
                ? "bg-[#dff8d7] font-medium text-[#159447]"
                : "text-gray-500 hover:bg-gray-50"
            }`
          }
        >
          Customers
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;