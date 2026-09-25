import type { Order } from "../types/orders";

export const mockOrders: Order[] = [
  { id: "1", orderNo: "#790841", customer: "Claire Warren", date: "12.09.20", total: "$145.85", payment: "PayPal", status: "Shipped" },
  { id: "2", orderNo: "#790841", customer: "Theresa Robertson", date: "12.09.20", total: "$225.15", payment: "Credit Card", status: "Shipped" },
  { id: "3", orderNo: "#790841", customer: "Nathan Hawkins", date: "12.09.20", total: "$45.55", payment: "PayPal", status: "Shipped" },
  { id: "4", orderNo: "#790841", customer: "Lily Williamson", date: "12.09.20", total: "$305.25", payment: "Credit Card", status: "Processing" },
  { id: "5", orderNo: "#790841", customer: "Brooklyn Steward", date: "12.09.20", total: "$483.80", payment: "Credit Card", status: "Shipped" },
  { id: "6", orderNo: "#790841", customer: "Norma Flores", date: "12.09.20", total: "$128.79", payment: "Payoneer", status: "Processing" },
  { id: "7", orderNo: "#790841", customer: "Leslie McKinney", date: "12.09.20", total: "$105.05", payment: "Credit Card", status: "Cancelled" },
  { id: "8", orderNo: "#790841", customer: "Gregory Black", date: "12.09.20", total: "$1028.15", payment: "PayPal", status: "Shipped" },
];