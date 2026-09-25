
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsToolbar } from "./ProductsToolbar";
import { ProductsTable } from "./ProductsTable";
import { Pagination } from "../common/Pagination";
import { AddProductDrawer } from "./AddProductDrawer";
import { mockProducts } from "../../data/mockProductsData";
import { PRICE_MIN, PRICE_MAX } from "../../data/constantsData";

import type {
  Product,
  ProductTab,
  ProductFilters,
  ProductFormValues,
} from "../../types/products";

const PAGE_SIZE = 10;

export const ProductsPage: React.FC = () => {

  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [activeTab, setActiveTab] = useState<ProductTab>("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

 
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  
  const [filters, setFilters] = useState<ProductFilters>({
    category: "All",
    status: "All",
    dateFrom: "",
    dateTo: "",
    minPrice: PRICE_MIN,
    maxPrice: PRICE_MAX,
  });

  
  const categories = useMemo(() => {
    return Array.from(new Set(products.map((product) => product.category)));
  }, [products]);

  const counts = useMemo(
    () => ({
      all: products.length,
      available: products.filter((p) => p.status === "Available").length,
      disabled: products.filter((p) => p.status === "Disabled").length,
    }),
    [products]
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "available" && p.status === "Available") ||
        (activeTab === "disabled" && p.status === "Disabled");

      
      const matchesSearch = p.name
        .toLowerCase()
        .includes(search.toLowerCase());

      
      const matchesCategory =
        filters.category === "All" ||
        p.category === filters.category;

    
      const matchesStatus =
        filters.status === "All" ||
        p.status === filters.status;

      
      const matchesDateFrom =
        !filters.dateFrom || p.date >= filters.dateFrom;

      const matchesDateTo =
        !filters.dateTo || p.date <= filters.dateTo;

      
      const numericPrice = Number(
        p.price.replace(/[^0-9.]/g, "")
      );

      const matchesPrice =
        numericPrice >= filters.minPrice &&
        numericPrice <= filters.maxPrice;

      return (
        matchesTab &&
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesDateFrom &&
        matchesDateTo &&
        matchesPrice
      );
    });
  }, [products, activeTab, search, filters]);

  const pageCount = Math.max(
    1,
    Math.ceil(filtered.length / pageSize)
  );

  const pageItems = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const toggleRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((rowId) => rowId !== id)
        : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedIds((prev) =>
      prev.length === pageItems.length
        ? []
        : pageItems.map((p) => p.id)
    );
  };

  const handleTabChange = (tab: ProductTab) => {
    setActiveTab(tab);
    setPage(1);
    setSelectedIds([]);
  };

  
  const handleFiltersApply = (newFilters: ProductFilters) => {
    setFilters(newFilters);
    setPage(1);
    setSelectedIds([]);
  };

  
  const handleSaveProduct = (values: ProductFormValues) => {
    const newProduct: Product = {
      id: `${Date.now()}`,
      name: values.name || "Untitled product",
      productNo: `#${Math.floor(100000 + Math.random() * 900000)}`,
      category: values.category || "Uncategorized",
      date: new Date().toLocaleDateString("en-GB").replace(/\//g, ".").slice(0, 8),
      price: `$${values.price || "0"}`,
      status: "Available",
    };
    setProducts((prev) => [newProduct, ...prev]);
    setIsAddProductOpen(false);
    navigate("/ecommerce/orders");
  };

  return (
    <div className="min-h-full bg-gray-50 p-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <ProductsToolbar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          counts={counts}
          searchValue={search}
          onSearchChange={(value) => {
            setSearch(value);
            setPage(1);
          }}
          filters={filters}
          onFiltersApply={handleFiltersApply}
          categories={categories}
          products={filtered}
          onAddNew={() => setIsAddProductOpen(true)}
        />

        <ProductsTable
          products={pageItems}
          selectedIds={selectedIds}
          onToggleRow={toggleRow}
          onToggleAll={toggleAll}
        />

        <Pagination
          page={page}
          pageCount={pageCount}
          pageSize={pageSize}
          totalItems={filtered.length}
          onPageChange={setPage}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setPage(1);
          }}
        />
      </div>

      <AddProductDrawer
        isOpen={isAddProductOpen}
        onClose={() => setIsAddProductOpen(false)}
        categories={categories}
        onSave={handleSaveProduct}
      />
    </div>
  );
};

export default ProductsPage;