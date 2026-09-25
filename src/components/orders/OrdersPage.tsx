
import React, { useMemo, useState } from "react";
import { OrdersToolbar } from "./OrdersToolbar";
import { OrdersTable } from "./OrdersTable";
import { Pagination } from "../../components/common/Pagination"; 
import { mockOrders } from "../../data/mockOrdersData";
import type { Order, OrderTab } from "../../types/orders";
import { OrderDetailsModal } from "./OrderDetailsModal";


const PAGE_SIZE = 10;

export const OrdersPage: React.FC = () => {
  const [orders] = useState<Order[]>(mockOrders);
  const [activeTab, setActiveTab] = useState<OrderTab>("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const counts = useMemo(
    () => ({
      all: orders.length,
      pending: orders.filter((o) => o.status === "Pending").length,
      processing: orders.filter((o) => o.status === "Processing").length,
      refunded: orders.filter((o) => o.status === "Refunded").length,
    }),
    [orders]
  );

  const filtered = useMemo(() => {
    return orders.filter((o) => {
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "pending" && o.status === "Pending") ||
        (activeTab === "processing" && o.status === "Processing") ||
        (activeTab === "refunded" && o.status === "Refunded");

      const query = search.toLowerCase();
      const matchesSearch =
        o.customer.toLowerCase().includes(query) || o.orderNo.toLowerCase().includes(query);

      return matchesTab && matchesSearch;
    });
  }, [orders, activeTab, search]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  const toggleRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedIds((prev) => (prev.length === pageItems.length ? [] : pageItems.map((o) => o.id)));
  };

  const handleTabChange = (tab: OrderTab) => {
    setActiveTab(tab);
    setPage(1);
    setSelectedIds([]);
  };

  return (
    <div className="min-h-full bg-gray-50 p-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <OrdersToolbar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          counts={counts}
          searchValue={search}
          onSearchChange={(value) => {
            setSearch(value);
            setPage(1);
          }}
          orders={filtered}
        />

        <OrdersTable
          orders={pageItems}
          selectedIds={selectedIds}
          onToggleRow={toggleRow}
          onToggleAll={toggleAll}
          onRowClick={(order) => setSelectedOrder(order)}
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

        <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
      </div>
    </div>
  );
};

export default OrdersPage;