import type { Product, ProductFilters } from "../types/products";

export const mockProducts: Product[] = [
  { id: "1", name: "MacBook Pro 15 Retina Touch Bar MV902", productNo: "#790841", category: "Notebook", date: "12.09.20", price: "$2,500", status: "Available" },
  { id: "2", name: "Apple Watch Series 5 Edition GPS + Cellular", productNo: "#790841", category: "Watch", date: "12.09.20", price: "$2,500", status: "Available" },
  { id: "3", name: "Apple iPhone 11 Pro Max 256GB Space Gray", productNo: "#790841", category: "Phone", date: "12.09.20", price: "$2,500", status: "Available" },
  { id: "4", name: "Apple Watch Series 5 Edition GPS + Cellular", productNo: "#790841", category: "Watch", date: "12.09.20", price: "$2,500", status: "Available" },
  { id: "5", name: "MacBook Pro 15 Retina Touch Bar MV902", productNo: "#790841", category: "Notebook", date: "12.09.20", price: "$2,500", status: "Disabled" },
  { id: "6", name: "Apple iPhone 11 Pro Max 64GB Midnight Green", productNo: "#790841", category: "Phone", date: "12.09.20", price: "$2,500", status: "Disabled" },
  { id: "7", name: "MacBook Pro 15 Retina Touch Bar MV902", productNo: "#790841", category: "Notebook", date: "12.09.20", price: "$2,500", status: "Available" },
  { id: "8", name: "Apple Watch Series 5 Edition GPS + Cellular", productNo: "#790841", category: "Watch", date: "12.09.20", price: "$2,500", status: "Available" },
];


export const PRICE_MIN = 500;
export const PRICE_MAX = 5500;

export const DEFAULT_FILTERS: ProductFilters = {
  category: "All",
  status: "Available",
  dateFrom: "2020-07-12",
  dateTo: "2020-07-12",
  minPrice: PRICE_MIN,
  maxPrice: PRICE_MAX,
};