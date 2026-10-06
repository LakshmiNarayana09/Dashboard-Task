import React from "react";
import type { Contact } from "../../types/contacts";
import { ContactAvatar } from "./ContactAvatar";
import { FavoriteContactItem } from "./FavoriteContactItem";

interface ContactDetailsPanelProps {
  contact: Contact | null;
  favorites: Contact[];
  onSelectFavorite: (contact: Contact) => void;
}

export const ContactDetailsPanel: React.FC<ContactDetailsPanelProps> = ({
  contact,
  favorites,
  onSelectFavorite,
}) => {
  if (!contact) {
    return (
      <div className="flex w-72 shrink-0 items-center justify-center rounded-2xl bg-white p-5 text-sm text-gray-400 shadow-sm">
        Select a contact
      </div>
    );
  }

  const infoRows: { label: string; value: string }[] = [
    { label: "Email", value: contact.email },
    { label: "Phone", value: contact.phone },
    ...(contact.birthday ? [{ label: "Birthday", value: contact.birthday }] : []),
    { label: "Location", value: contact.location },
  ];

  return (
    <div className="w-72 shrink-0 rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-6 flex flex-col items-center gap-2 text-center">
        <div className="rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 p-1.5">
          <ContactAvatar name={contact.name} avatar={contact.avatar} size="lg" />
        </div>
        <p className="text-base font-semibold text-gray-900">{contact.name}</p>
        <p className="text-sm text-gray-400">{contact.role}</p>
      </div>

      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Info</p>
      <div className="mb-6 space-y-3">
        {infoRows.map((row) => (
          <div key={row.label}>
            <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">{row.label}</p>
            <p className="text-sm text-gray-700">{row.value}</p>
          </div>
        ))}
      </div>

      {favorites.length > 0 && (
        <>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Favorites</p>
          <div className="space-y-1">
            {favorites.map((fav) => (
              <FavoriteContactItem key={fav.id} contact={fav} onClick={onSelectFavorite} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ContactDetailsPanel;