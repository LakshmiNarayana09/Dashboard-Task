import type { ProductFilters } from "../types/products";

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