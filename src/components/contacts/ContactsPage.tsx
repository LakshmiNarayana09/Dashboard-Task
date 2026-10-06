import React, { useMemo, useState } from "react";
import { ContactsToolbar } from "./ContactsToolbar";
import { ContactsTable } from "./ContactsTable";
import { ContactDetailsPanel } from "./ContactDetailsPanel";
import { AddContactModal } from "./AddContactModal";
import { Pagination } from "../common/Pagination";
import { mockContacts } from "../../data/mockContactsData";
import type { Contact, ContactFormValues } from "../../types/contacts";

const PAGE_SIZE = 10;

export const ContactsPage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [activeContactId, setActiveContactId] = useState<string | undefined>(
    contacts.find((c) => c.name === "Jane Wilson")?.id ?? contacts[0]?.id
  );
  const [isAddContactOpen, setIsAddContactOpen] = useState(false);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return contacts.filter(
      (c) => c.name.toLowerCase().includes(query) || c.email.toLowerCase().includes(query)
    );
  }, [contacts, search]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  const activeContact = contacts.find((c) => c.id === activeContactId) ?? null;
  const favorites = activeContact
    ? contacts.filter((c) => activeContact.favoriteIds?.includes(c.id))
    : [];

  const toggleRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedIds((prev) => (prev.length === pageItems.length ? [] : pageItems.map((c) => c.id)));
  };

  const handleSaveContact = (values: ContactFormValues) => {
    const birthday =
      values.birthDay && values.birthMonth && values.birthYear
        ? `${values.birthDay} ${values.birthMonth}, ${values.birthYear}`
        : undefined;

    const newContact: Contact = {
      id: `${Date.now()}`,
      name: `${values.firstName} ${values.lastName}`.trim(),
      role: values.jobTitle || "—",
      email: values.email,
      location: values.address || "—",
      phone: `${values.countryCode} ${values.phone}`.trim(),
      avatar: values.avatar || undefined,
      birthday,
    };

    setContacts((prev) => [newContact, ...prev]);
    setActiveContactId(newContact.id);
    setIsAddContactOpen(false);
  };

  return (
    <div className="min-h-full bg-gray-50 p-6">
      <ContactsToolbar
        searchValue={search}
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onAddContact={() => setIsAddContactOpen(true)}
      />

      <div className="flex items-start gap-5">
        <div className="flex-1 rounded-2xl bg-white p-5 shadow-sm">
          <ContactsTable
            contacts={pageItems}
            selectedIds={selectedIds}
            activeContactId={activeContactId}
            onToggleRow={toggleRow}
            onToggleAll={toggleAll}
            onRowClick={(contact) => setActiveContactId(contact.id)}
            onRowMenu={(contact) => console.log("Row menu for", contact.id)}
          />

          <Pagination
            page={page}
            pageCount={pageCount}
            pageSize={pageSize}
            totalItems={filtered.length}
            onPageChange={setPage}
            onPageSizeChange={(size) => {
              setPageSize(size);
              setPage(1);
            }}
          />
        </div>

        <ContactDetailsPanel
          contact={activeContact}
          favorites={favorites}
          onSelectFavorite={(contact) => setActiveContactId(contact.id)}
        />
      </div>

      <AddContactModal
        isOpen={isAddContactOpen}
        onClose={() => setIsAddContactOpen(false)}
        onSave={handleSaveContact}
      />
    </div>
  );
};

export default ContactsPage;