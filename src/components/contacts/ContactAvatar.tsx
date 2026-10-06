import React from "react";

interface ContactAvatarProps {
  name: string;
  avatar?: string;
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: "h-7 w-7 text-[10px]",
  md: "h-9 w-9 text-xs",
  lg: "h-24 w-24 text-2xl",
};

export const ContactAvatar: React.FC<ContactAvatarProps> = ({ name, avatar, size = "md" }) => {
  const sizeClass = SIZES[size];

  if (avatar) {
    return <img src={avatar} alt={name} className={`${sizeClass} shrink-0 rounded-full object-cover`} />;
  }

  const initials = name
    .split(" ")
    .map((p) => p.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span
      className={`flex ${sizeClass} shrink-0 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-700`}
    >
      {initials}
    </span>
  );
};

export default ContactAvatar;