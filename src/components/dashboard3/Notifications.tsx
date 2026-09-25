
import { Bell, X } from "lucide-react";

import { notificationsData } from "../../data/dashboardData";

interface NotificationsProps {
  onClose?: () => void;
}

function Notifications({ onClose }: NotificationsProps) {
  return (
    <div className="absolute right-0 top-[68px] z-50 h-[425px] w-[340px] overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      
      <div className="flex h-[64px] items-center justify-between px-6">
        <h2 className="font-['Poppins'] text-[18px] font-medium leading-none text-[#3f434a]">
          Notifications
        </h2>

        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-1 text-[#8a9099] transition hover:bg-gray-100"
          aria-label="Close notifications"
        >
          <X size={16} />
        </button>
      </div>

      
      <div className="px-3">
        {notificationsData.map((notification) => (
          <div
            key={notification.id}
            className="mb-2 flex h-[56px] items-center rounded-md bg-white px-3"
          >
            
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e5e7eb]">
              {notification.avatar ? (
                <img
                  src={notification.avatar}
                  alt={notification.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Bell size={16} className="text-[#3f434a]" />
              )}
            </div>

            
            <div className="ml-4">
              <p className="font-['Poppins'] text-[15px] font-normal leading-none text-black">
                {notification.name}
              </p>

              <p className="mt-1.5 font-['Poppins'] text-[12px] font-normal leading-none text-[#8a9099]">
                {notification.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;

