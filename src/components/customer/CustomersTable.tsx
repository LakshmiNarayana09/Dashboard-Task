
import React from "react";
import { MoreVertical, ChevronDown } from "lucide-react";
import type { Customer } from "../../types/customers";
import { CustomerAvatar } from "./CustomerAvatar";
import { CustomerStatusBadge } from "./CustomerStatusBadge";

interface CustomersTableProps {
  customers: Customer[];
  selectedIds: string[];
  onToggleRow: (id: string) => void;
  onToggleAll: () => void;
  onRowClick?: (customer: Customer) => void;
  onRowMenu?: (customer: Customer) => void;
}

const columns = [
  { key: "name", label: "Customer Name" },
  { key: "location", label: "Location" },
  { key: "phone", label: "Phone" },
  { key: "date", label: "Date" },
  { key: "status", label: "Status" },
];

export const CustomersTable: React.FC<CustomersTableProps> = ({
  customers,
  selectedIds,
  onToggleRow,
  onToggleAll,
  onRowClick,
  onRowMenu,
}) => {
  const allSelected = customers.length > 0 && selectedIds.length === customers.length;

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
          {customers.map((customer) => {
            const checked = selectedIds.includes(customer.id);
            return (
              <tr
                key={customer.id}
                onClick={() => onRowClick?.(customer)}
                className="cursor-pointer border-b border-gray-50 text-sm text-gray-600 hover:bg-gray-50/60"
              >
                <td className="py-3.5 pl-1" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleRow(customer.id)}
                    className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
                  />
                </td>
                <td className="py-3.5 pr-4">
                  <div className="flex items-center gap-3">
                    <CustomerAvatar name={customer.name} avatar={customer.avatar} />
                    <div>
                      <p className="font-medium text-gray-800">{customer.name}</p>
                      <p className="text-xs text-gray-400">{customer.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 pr-4 text-gray-500">{customer.location}</td>
                <td className="py-3.5 pr-4 text-gray-500">{customer.phone}</td>
                <td className="py-3.5 pr-4 text-gray-500">{customer.date}</td>
                <td className="py-3.5 pr-4">
                  <CustomerStatusBadge status={customer.status} />
                </td>
                <td className="py-3.5 pr-1 text-right" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => onRowMenu?.(customer)}
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

export default CustomersTable;