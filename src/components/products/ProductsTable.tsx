
import React, { useState } from "react";
import { MoreVertical, ChevronDown } from "lucide-react";
import type { Product } from "../../types/products";
import { StatusBadge } from "./StatusBadge";
import ProductDetailsModal from "./ProductDetailsModal";

interface ProductsTableProps {
  products: Product[];
  selectedIds: string[];
  onToggleRow: (id: string) => void;
  onToggleAll: () => void;
  onRowMenu?: (product: Product) => void;
}

const columns = [
  { key: "name", label: "Product Name" },
  { key: "productNo", label: "Product No." },
  { key: "category", label: "Category" },
  { key: "date", label: "Date" },
  { key: "price", label: "Price" },
  { key: "status", label: "Status" },
];

export const ProductsTable: React.FC<ProductsTableProps> = ({
  products,
  selectedIds,
  onToggleRow,
  onToggleAll,
  onRowMenu,
}) => {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const allSelected =
    products.length > 0 &&
    selectedIds.length === products.length;

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="w-10 py-3 pl-1">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={onToggleAll}
                  className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
                />
              </th>

              {columns.map((col) => (
                <th
                  key={col.key}
                  className="py-3 pr-4 text-xs font-medium uppercase tracking-wide text-gray-400"
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    <ChevronDown className="h-3 w-3" />
                  </span>
                </th>
              ))}

              <th className="w-10 py-3" />
            </tr>
          </thead>

          <tbody>
            {products.map((product) => {
              const checked = selectedIds.includes(product.id);

              return (
                <tr
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer border-b border-gray-50 text-sm text-gray-600 transition-colors hover:bg-gray-50/60"
                >
                  
                  <td className="py-3.5 pl-1">
                    <input
                      type="checkbox"
                      checked={checked}
                      onClick={(event) => event.stopPropagation()}
                      onChange={() => onToggleRow(product.id)}
                      className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
                    />
                  </td>

                  
                  <td className="py-3.5 pr-4 font-medium text-gray-800">
                    {product.name}
                  </td>

                  
                  <td className="py-3.5 pr-4 text-gray-500">
                    {product.productNo}
                  </td>

                  
                  <td className="py-3.5 pr-4 text-gray-500">
                    {product.category}
                  </td>

                  
                  <td className="py-3.5 pr-4 text-gray-500">
                    {product.date}
                  </td>

                  
                  <td className="py-3.5 pr-4 text-gray-500">
                    {product.price}
                  </td>

                  
                  <td className="py-3.5 pr-4">
                    <StatusBadge status={product.status} />
                  </td>

                  
                  <td className="py-3.5 pr-1 text-right">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        onRowMenu?.(product);
                      }}
                      className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                      aria-label="Row actions"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default ProductsTable;