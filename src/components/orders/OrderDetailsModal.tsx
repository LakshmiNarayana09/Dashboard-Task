
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Order, OrderDetail, FulfilmentStatus, PaymentStatus } from "../../types/orders";
import { OrderExportMenu } from "./OrderExportMenu";
import { OrderDetailsTab } from "./OrderDetailsTab";
import { OrderProductsTab } from "./OrderProductsTab";
import { OrderInvoiceTab } from "./OrderInvoiceTab";

interface OrderDetailsModalProps {
  order: Order | null;
  onClose: () => void;
}

type ModalTab = "details" | "products" | "invoice";

const TABS: { key: ModalTab; label: string }[] = [
  { key: "details", label: "Order Details" },
  { key: "products", label: "Products" },
  { key: "invoice", label: "Invoice" },
];


function toOrderDetails(order: Order): OrderDetail {
  const [firstName, ...rest] = order.customer.split(" ");
  const lastName = rest.join(" ") || "—";
  const emailSlug = order.customer.toLowerCase().replace(/\s+/g, ".");

  const address = {
    firstName,
    lastName,
    address: "993 E. Brewer St.",
    city: "New York",
    state: "New York",
    country: "United States",
    phone: "+1(070) 4567-8800",
    email: `${emailSlug}@example.com`,
    postcode: "11742",
  };

  return {
    orderNo: order.orderNo.replace("#", ""),
    customer: {
      name: order.customer,
      email: `${emailSlug}@example.com`,
      phone: "+1(070) 4567-8800",
      location: "993 E. Brewer St, Holtsville",
    },
    paymentMethod: order.payment,
    shippingMethod: "Carrier",
    transactionId: "000001-TXHQ",
    amount: order.total,
    trackingCode: "FX-012345-6",
    shipDate: order.date,
    fulfilmentStatus: order.status === "Shipped" ? "Delivered" : "Unfulfilled",
    paymentStatus: order.status === "Cancelled" ? "Refunded" : "Paid",
    billingAddress: address,
    shippingAddress: address,
    items: [
      {
        id: "1",
        name: "Apple iPhone 11 64GB Purple",
        quantity: 1,
        price: order.total,
        total: order.total,
      },
    ],
  };
}

export const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ order, onClose }) => {
  const [activeTab, setActiveTab] = useState<ModalTab>("details");
  const [detail, setDetail] = useState<OrderDetail | null>(null);

  useEffect(() => {
    if (order) {
      setDetail(toOrderDetails(order));
      setActiveTab("details");
    }
  }, [order?.id]);

  if (!order || !detail) return null;

  const updateFulfilmentStatus = (status: FulfilmentStatus) => {
    setDetail((prev) => (prev ? { ...prev, fulfilmentStatus: status } : prev));
  };

  const updatePaymentStatus = (status: PaymentStatus) => {
    setDetail((prev) => (prev ? { ...prev, paymentStatus: status } : prev));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="flex items-center justify-between border-b border-gray-100 px-6 pt-4">
          <div className="flex items-center gap-6">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative pb-3 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    isActive ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute -bottom-px left-0 h-0.5 w-full rounded-full bg-emerald-500" />
                  )}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="mb-3 rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-900">Orders #{detail.orderNo}</h2>
          <OrderExportMenu order={detail} />
        </div>

        
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {activeTab === "details" && (
            <OrderDetailsTab
              order={detail}
              onFulfilmentStatusChange={updateFulfilmentStatus}
              onPaymentStatusChange={updatePaymentStatus}
            />
          )}
          {activeTab === "products" && <OrderProductsTab order={detail} />}
          {activeTab === "invoice" && <OrderInvoiceTab order={detail} />}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;