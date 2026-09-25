
import React from "react";
import { MoreVertical, ChevronDown } from "lucide-react";
import type { Order } from "../../types/orders";
import { OrderStatusBadge } from "./OrderStatusBadge";

interface OrdersTableProps {
  orders: Order[];
  selectedIds: string[];
  onToggleRow: (id: string) => void;
  onToggleAll: () => void;
  onRowClick?: (order: Order) => void;
  onRowMenu?: (order: Order) => void;
}

const columns = [
  { key: "orderNo", label: "Order No." },
  { key: "customer", label: "Customer" },
  { key: "date", label: "Date" },
  { key: "total", label: "Total" },
  { key: "payment", label: "Payment" },
  { key: "status", label: "Status" },
];

export const OrdersTable: React.FC<OrdersTableProps> = ({
  orders,
  selectedIds,
  onToggleRow,
  onToggleAll,
  onRowClick,
  onRowMenu,
}) => {
  const allSelected = orders.length > 0 && selectedIds.length === orders.length;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left">
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
            {columns.map((col) => (
              <th key={col.key} className="py-3 pr-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                <span className="inline-flex items-center gap-1">
                  {col.label}
                  <ChevronDown className="h-3 w-3" />
                </span>
              </th>
            ))}
            <th className="w-10 py-3" />
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const checked = selectedIds.includes(order.id);
            return (
              <tr
                key={order.id}
                onClick={() => onRowClick?.(order)}
                className="cursor-pointer border-b border-gray-50 text-sm text-gray-600 hover:bg-gray-50/60"
              >
                <td className="py-3.5 pl-1" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleRow(order.id)}
                    className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
                  />
                </td>
                <td className="py-3.5 pr-4 font-medium text-gray-800">{order.orderNo}</td>
                <td className="py-3.5 pr-4 text-gray-600">{order.customer}</td>
                <td className="py-3.5 pr-4 text-gray-500">{order.date}</td>
                <td className="py-3.5 pr-4 font-medium text-gray-800">{order.total}</td>
                <td className="py-3.5 pr-4 text-gray-500">{order.payment}</td>
                <td className="py-3.5 pr-4">
                  <OrderStatusBadge status={order.status} />
                </td>
                <td className="py-3.5 pr-1 text-right" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => onRowMenu?.(order)}
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

export default OrdersTable;