export type OrderStatus = "Pending" | "Processing" | "Shipped" | "Refunded" | "Cancelled";

export type PaymentMethod = "PayPal" | "Credit Card" | "Payoneer";

export interface Order {
  id: string;
  orderNo: string;
  customer: string;
  date: string;
  total: string;
  payment: PaymentMethod;
  status: OrderStatus;
}

export type OrderTab = "all" | "pending" | "processing" | "refunded";

export interface OrderTabCounts {
  all: number;
  pending: number;
  processing: number;
  refunded: number;
}

export interface OrderCustomer {
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
}

export interface OrderAddress {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  postcode: string;
}

export type FulfilmentStatus = "Unfulfilled" | "Delivered" | "Shipped" | "Cancelled";
export type PaymentStatus = "Paid" | "Unpaid" | "Refunded";

export interface OrderLineItem {
  id: string;
  name: string;
  image?: string;
  quantity: number;
  price: string;
  total: string;
}

export interface OrderDetail {
  orderNo: string;
  customer: OrderCustomer;
  paymentMethod: string;
  shippingMethod: string;
  transactionId: string;
  amount: string;
  trackingCode: string;
  shipDate: string;
  fulfilmentStatus: FulfilmentStatus;
  paymentStatus: PaymentStatus;
  billingAddress: OrderAddress;
  shippingAddress: OrderAddress;
  items: OrderLineItem[];
}