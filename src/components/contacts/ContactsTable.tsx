import React from "react";
import { MoreVertical } from "lucide-react";
import type { Contact } from "../../types/contacts";
import { ContactAvatar } from "./ContactAvatar";

interface ContactsTableProps {
  contacts: Contact[];
  selectedIds: string[];
  activeContactId?: string;
  onToggleRow: (id: string) => void;
  onToggleAll: () => void;
  onRowClick: (contact: Contact) => void;
  onRowMenu?: (contact: Contact) => void;
}

export const ContactsTable: React.FC<ContactsTableProps> = ({
  contacts,
  selectedIds,
  activeContactId,
  onToggleRow,
  onToggleAll,
  onRowClick,
  onRowMenu,
}) => {
  const allSelected = contacts.length > 0 && selectedIds.length === contacts.length;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="w-10 py-3 pl-1">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={onToggleAll}
                className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
              />
            </th>
            <th className="py-3 pr-4 text-xs font-medium uppercase tracking-wide text-gray-400">Name</th>
            <th className="py-3 pr-4 text-xs font-medium uppercase tracking-wide text-gray-400">Email</th>
            <th className="py-3 pr-4 text-xs font-medium uppercase tracking-wide text-gray-400">Location</th>
            <th className="py-3 pr-4 text-xs font-medium uppercase tracking-wide text-gray-400">Phone</th>
            <th className="w-10 py-3" />
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            const checked = selectedIds.includes(contact.id);
            const isActive = contact.id === activeContactId;
            return (
              <tr
                key={contact.id}
                onClick={() => onRowClick(contact)}
                className={`cursor-pointer border-b border-gray-50 text-sm hover:bg-gray-50/60 ${
                  isActive ? "bg-emerald-50/50" : ""
                }`}
              >
                <td className="py-3.5 pl-1" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleRow(contact.id)}
                    className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
                  />
                </td>
                <td className="py-3.5 pr-4">
                  <div className="flex items-center gap-3">
                    <ContactAvatar name={contact.name} avatar={contact.avatar} />
                    <div>
                      <p className="font-medium text-gray-800">{contact.name}</p>
                      <p className="text-xs text-gray-400">{contact.role}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 pr-4 text-gray-500">{contact.email}</td>
                <td className="py-3.5 pr-4 text-gray-500">{contact.location}</td>
                <td className="py-3.5 pr-4 text-gray-500">{contact.phone}</td>
                <td className="py-3.5 pr-1 text-right" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => onRowMenu?.(contact)}
                    className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                    aria-label="Row actions"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;