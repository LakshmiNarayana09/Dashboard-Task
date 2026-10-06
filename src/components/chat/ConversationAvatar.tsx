import React from "react";
import { Hash } from "lucide-react";
import type { ConversationKind } from "../../types/chat";

interface ConversationAvatarProps {
  name: string;
  kind: ConversationKind;
  avatar?: string;
  size?: "sm" | "md";
}

export const ConversationAvatar: React.FC<ConversationAvatarProps> = ({
  name,
  kind,
  avatar,
  size = "md",
}) => {
  const sizeClass = size === "sm" ? "h-9 w-9 text-xs" : "h-10 w-10 text-sm";

  if (kind === "team") {
    return (
      <span className={`flex ${sizeClass} shrink-0 items-center justify-center rounded-full bg-sky-100 font-semibold text-sky-600`}>
        <Hash className="h-4 w-4" />
      </span>
    );
  }

  if (avatar) {
    return <img src={avatar} alt={name} className={`${sizeClass} shrink-0 rounded-full object-cover`} />;
  }

  const initials = name.charAt(0).toUpperCase();
  return (
    <span className={`flex ${sizeClass} shrink-0 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-700`}>
      {initials}
    </span>
  );
};

export default ConversationAvatar;