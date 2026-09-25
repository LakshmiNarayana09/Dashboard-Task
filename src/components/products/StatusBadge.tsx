import React from "react";
import type { ProductStatus } from "../../types/products";

interface StatusBadgeProps {
  status: ProductStatus;
}

const styles: Record<ProductStatus, string> = {
  Available: "bg-emerald-50 text-emerald-600",
  Disabled: "bg-orange-50 text-orange-500",
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;