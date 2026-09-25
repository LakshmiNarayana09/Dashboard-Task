export type ProductStatus = "Available" | "Disabled";

export interface Product {
  id: string;
  name: string;
  image?: string;
  productNo: string;
  category: string;
  date: string;
  price: string;
  status: ProductStatus;
}

export type ProductTab = "all" | "available" | "disabled";

export interface ProductFilters {
  category: string; 
  status: "All" | ProductStatus;
  dateFrom: string; 
  dateTo: string; 
  minPrice: number;
  maxPrice: number;
}

export interface TabCounts {
  all: number;
  available: number;
  disabled: number;
}

export interface UploadedImage {
  id: string;
  url: string;
  name: string;
  progress: number; 
}

export interface ProductFormValues {
  name: string;
  description: string;
  category: string;
  price: string;
  discount: string;
  images: UploadedImage[];
  tags: string[];
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductDetails {
  id: string;
  name: string;
  sku: string;
  description: string;
  images: string[]; 
  price: number;
  specifications: ProductSpecification[];
}