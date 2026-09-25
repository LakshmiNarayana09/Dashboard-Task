
import React from "react";

interface CustomerAvatarProps {
  name: string;
  avatar?: string;
}

export const CustomerAvatar: React.FC<CustomerAvatarProps> = ({ name, avatar }) => {
  if (avatar) {
    return <img src={avatar} alt={name} className="h-9 w-9 rounded-full object-cover" />;
  }

  const initials = name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
      {initials}
    </span>
  );
};

export default CustomerAvatar;