
import React, { useMemo, useState } from "react";
import { CustomersToolbar } from "./CustomersToolbar";
import { CustomersTable } from "./CustomersTable";
import { Pagination } from "../common/Pagination";
import { CustomerFormModal } from "./CustomerFormModal";
import { mockCustomers } from "../../data/mockCustomersData";
import type { Customer, CustomerTab, CustomerFormValues } from "../../types/customers";

const PAGE_SIZE = 10;

export const CustomersPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [activeTab, setActiveTab] = useState<CustomerTab>("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

  const counts = useMemo(
    () => ({
      all: customers.length,
      active: customers.filter((c) => c.status === "Active").length,
      blocked: customers.filter((c) => c.status === "Blocked").length,
    }),
    [customers]
  );

  const filtered = useMemo(() => {
    return customers.filter((c) => {
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "active" && c.status === "Active") ||
        (activeTab === "blocked" && c.status === "Blocked");
      const query = search.toLowerCase();
      const matchesSearch =
        c.name.toLowerCase().includes(query) || c.email.toLowerCase().includes(query);
      return matchesTab && matchesSearch;
    });
  }, [customers, activeTab, search]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  const toggleRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedIds((prev) => (prev.length === pageItems.length ? [] : pageItems.map((c) => c.id)));
  };

  const handleTabChange = (tab: CustomerTab) => {
    setActiveTab(tab);
    setPage(1);
    setSelectedIds([]);
  };

  const handleSaveCustomer = (values: CustomerFormValues, existing?: Customer | null) => {
    const name = `${values.firstName} ${values.lastName}`.trim() || "Unnamed customer";
    const phone = `${values.countryCode} ${values.phone}`.trim();

    if (existing) {
      setCustomers((prev) =>
        prev.map((c) =>
          c.id === existing.id
            ? {
                ...c,
                name,
                email: values.email,
                phone,
                status: values.status,
                avatar: values.avatar || c.avatar,
              }
            : c
        )
      );
    } else {
      const newCustomer: Customer = {
        id: `${Date.now()}`,
        name,
        email: values.email,
        avatar: values.avatar || undefined,
        location: [values.address.city, values.address.country].filter(Boolean).join(", ") || "—",
        phone,
        date: new Date().toLocaleDateString("en-GB").replace(/\//g, ".").slice(0, 8),
        status: values.status,
      };
      setCustomers((prev) => [newCustomer, ...prev]);
    }

    setIsFormOpen(false);
    setEditingCustomer(null);
  };

  return (
    <div className="min-h-full bg-gray-50 p-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <CustomersToolbar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          counts={counts}
          searchValue={search}
          onSearchChange={(value) => {
            setSearch(value);
            setPage(1);
          }}
          customers={filtered}
          onAddNew={() => {
            setEditingCustomer(null);
            setIsFormOpen(true);
          }}
        />

        <CustomersTable
          customers={pageItems}
          selectedIds={selectedIds}
          onToggleRow={toggleRow}
          onToggleAll={toggleAll}
          onRowClick={(customer) => {
            setEditingCustomer(customer);
            setIsFormOpen(true);
          }}
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

      <CustomerFormModal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingCustomer(null);
        }}
        customer={editingCustomer}
        onSave={handleSaveCustomer}
      />
    </div>
  );
};

export default CustomersPage;