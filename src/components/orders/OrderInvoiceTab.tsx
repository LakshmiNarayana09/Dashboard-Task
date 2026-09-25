
import React from "react";
import type { OrderDetail } from "../../types/orders";

interface OrderInvoiceTabProps {
  order: OrderDetail;
}

export const OrderInvoiceTab: React.FC<OrderInvoiceTabProps> = ({ order }) => {
  return (
    <div className="space-y-6 text-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-400">Billed to</p>
          <p className="font-medium text-gray-800">{order.customer.name}</p>
          <p className="text-gray-500">{order.billingAddress.address}</p>
          <p className="text-gray-500">
            {order.billingAddress.city}, {order.billingAddress.state}, {order.billingAddress.country}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Order No.</p>
          <p className="font-medium text-gray-800">#{order.orderNo}</p>
          <p className="mt-2 text-xs text-gray-400">Date</p>
          <p className="font-medium text-gray-800">{order.shipDate}</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full min-w-[480px] border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-100 text-xs uppercase tracking-wide text-gray-400">
              <th className="py-2.5 pl-4 pr-4 font-medium">Item</th>
              <th className="py-2.5 pr-4 font-medium">Qty</th>
              <th className="py-2.5 pr-4 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 last:border-b-0">
                <td className="py-3 pl-4 pr-4 text-gray-700">{item.name}</td>
                <td className="py-3 pr-4 text-gray-500">{item.quantity}</td>
                <td className="py-3 pr-4 font-medium text-gray-800">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <div className="w-48 space-y-1.5">
          <div className="flex items-center justify-between text-gray-500">
            <span>Subtotal</span>
            <span>{order.amount}</span>
          </div>
          <div className="flex items-center justify-between border-t border-gray-100 pt-1.5 text-base font-semibold text-gray-900">
            <span>Total</span>
            <span>{order.amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInvoiceTab;