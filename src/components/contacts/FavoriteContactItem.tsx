import React from "react";
import type { Contact } from "../../types/contacts";
import { ContactAvatar } from "./ContactAvatar";

interface FavoriteContactItemProps {
  contact: Contact;
  onClick: (contact: Contact) => void;
}

export const FavoriteContactItem: React.FC<FavoriteContactItemProps> = ({ contact, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(contact)}
      className="flex w-full items-center gap-2.5 rounded-lg px-1 py-1.5 text-left hover:bg-gray-50"
    >
      <ContactAvatar name={contact.name} avatar={contact.avatar} size="sm" />
      <div className="min-w-0">
        <p className="truncate text-xs font-medium text-gray-800">{contact.name}</p>
        <p className="truncate text-[11px] text-gray-400">{contact.role}</p>
      </div>
    </button>
  );
};

export default FavoriteContactItem;