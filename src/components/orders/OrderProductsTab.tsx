
import React from "react";
import { ImageIcon } from "lucide-react";
import type { OrderDetail } from "../../types/orders";

interface OrderProductsTabProps {
  order: OrderDetail;
}

export const OrderProductsTab: React.FC<OrderProductsTabProps> = ({ order }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-xs uppercase tracking-wide text-gray-400">
            <th className="py-2.5 pl-4 pr-4 font-medium">Product</th>
            <th className="py-2.5 pr-4 font-medium">Qty</th>
            <th className="py-2.5 pr-4 font-medium">Price</th>
            <th className="py-2.5 pr-4 font-medium">Total</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item) => (
            <tr key={item.id} className="border-b border-gray-50 last:border-b-0">
              <td className="flex items-center gap-3 py-3 pl-4 pr-4 font-medium text-gray-800">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="h-full w-full rounded-lg object-cover" />
                  ) : (
                    <ImageIcon className="h-4 w-4 text-gray-300" strokeWidth={1.25} />
                  )}
                </span>
                {item.name}
              </td>
              <td className="py-3 pr-4 text-gray-500">{item.quantity}</td>
              <td className="py-3 pr-4 text-gray-500">{item.price}</td>
              <td className="py-3 pr-4 font-medium text-gray-800">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderProductsTab;