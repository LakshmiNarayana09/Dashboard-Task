
import React from "react";
import type { CustomerStatus } from "../../types/customers";

interface CustomerStatusBadgeProps {
  status: CustomerStatus;
}

const styles: Record<CustomerStatus, string> = {
  Active: "bg-emerald-50 text-emerald-600",
  Blocked: "bg-orange-50 text-orange-500",
};

export const CustomerStatusBadge: React.FC<CustomerStatusBadgeProps> = ({ status }) => {
  return (
    <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
};

export default CustomerStatusBadge;