
import React from "react";
import { ChevronDown } from "lucide-react";
import type { OrderDetail, FulfilmentStatus, PaymentStatus } from "../../types/orders";
import { AddressAccordion } from "./AddressAccordion";

interface OrderDetailsTabProps {
  order: OrderDetail;
  onFulfilmentStatusChange: (status: FulfilmentStatus) => void;
  onPaymentStatusChange: (status: PaymentStatus) => void;
}

const FULFILMENT_OPTIONS: FulfilmentStatus[] = ["Unfulfilled", "Shipped", "Delivered", "Cancelled"];
const PAYMENT_OPTIONS: PaymentStatus[] = ["Unpaid", "Paid", "Refunded"];

export const OrderDetailsTab: React.FC<OrderDetailsTabProps> = ({
  order,
  onFulfilmentStatusChange,
  onPaymentStatusChange,
}) => {
  return (
    <div className="space-y-6">
      
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">Customer</h3>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-xs uppercase tracking-wide text-gray-400">
                <th className="py-2.5 pl-4 pr-4 font-medium">Name</th>
                <th className="py-2.5 pr-4 font-medium">Email</th>
                <th className="py-2.5 pr-4 font-medium">Phone</th>
                <th className="py-2.5 pr-4 font-medium">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center gap-2 py-3 pl-4 pr-4 font-medium text-gray-800">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                    {order.customer.name.charAt(0)}
                  </span>
                  {order.customer.name}
                </td>
                <td className="py-3 pr-4 text-gray-500">{order.customer.email}</td>
                <td className="py-3 pr-4 text-gray-500">{order.customer.phone}</td>
                <td className="py-3 pr-4 text-gray-500">{order.customer.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-gray-900">Payment method</label>
          <div className="relative">
            <select
              value={order.paymentMethod}
              disabled
              className="w-full appearance-none rounded-lg border border-gray-200 px-3 py-2 pr-8 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 disabled:cursor-default disabled:bg-white disabled:text-gray-700 disabled:opacity-100"
            >
              <option value={order.paymentMethod}>{order.paymentMethod}</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Transaction ID: <span className="text-gray-600">{order.transactionId}</span>
          </p>
          <p className="text-xs text-gray-400">
            Amount: <span className="text-gray-600">{order.amount}</span>
          </p>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-gray-900">Shipping method</label>
          <div className="relative">
            <select
              value={order.shippingMethod}
              disabled
              className="w-full appearance-none rounded-lg border border-gray-200 px-3 py-2 pr-8 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 disabled:cursor-default disabled:bg-white disabled:text-gray-700 disabled:opacity-100"
            >
              <option value={order.shippingMethod}>{order.shippingMethod}</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Tracking Code: <span className="text-gray-600">{order.trackingCode}</span>
          </p>
          <p className="text-xs text-gray-400">
            Date: <span className="text-gray-600">{order.shipDate}</span>
          </p>
        </div>

        <div className="space-y-3 rounded-xl bg-gray-50 p-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-500">Fulfilment status</label>
            <div className="relative">
              <select
                value={order.fulfilmentStatus}
                onChange={(e) => onFulfilmentStatusChange(e.target.value as FulfilmentStatus)}
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-1.5 pr-8 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                {FULFILMENT_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-500">Payment status</label>
            <div className="relative">
              <select
                value={order.paymentStatus}
                onChange={(e) => onPaymentStatusChange(e.target.value as PaymentStatus)}
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-1.5 pr-8 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                {PAYMENT_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      
      <div className="space-y-3">
        <AddressAccordion title="Billing address" address={order.billingAddress} defaultOpen />
        <AddressAccordion title="Shipping address" address={order.shippingAddress} />
      </div>
    </div>
  );
};

export default OrderDetailsTab;