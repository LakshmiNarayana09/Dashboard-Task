
import React from "react";
import type { OrderStatus } from "../../types/orders";

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

const styles: Record<OrderStatus, string> = {
  Shipped: "bg-emerald-50 text-emerald-600",
  Processing: "bg-orange-50 text-orange-500",
  Pending: "bg-blue-50 text-blue-500",
  Refunded: "bg-purple-50 text-purple-500",
  Cancelled: "bg-red-50 text-red-500",
};

export const OrderStatusBadge: React.FC<OrderStatusBadgeProps> = ({ status }) => {
  return (
    <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
};

export default OrderStatusBadge;