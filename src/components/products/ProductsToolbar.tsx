
import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Download,
  Plus,
  ChevronDown,
  Printer,
  FileSpreadsheet,
  FileText,
  FileType,
} from "lucide-react";

import type {
  Product,
  ProductTab,
  TabCounts,
  ProductFilters,
} from "../../types/products";

import { FilterPopover } from "./FilterPopover";

interface ProductsToolbarProps {
  activeTab: ProductTab;
  onTabChange: (tab: ProductTab) => void;
  counts: TabCounts;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onAddNew?: () => void;

  filters: ProductFilters;
  onFiltersApply: (filters: ProductFilters) => void;
  categories: string[];

  products: Product[];
}

const TABS: { key: ProductTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "available", label: "Available" },
  { key: "disabled", label: "Disabled" },
];

export const ProductsToolbar: React.FC<ProductsToolbarProps> = ({
  activeTab,
  onTabChange,
  counts,
  searchValue,
  onSearchChange,
  onAddNew,
  filters,
  onFiltersApply,
  categories,
  products,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  
  const exportCSV = () => {
    const headers = [
      "Product Name",
      "Product No",
      "Category",
      "Date",
      "Price",
      "Status",
    ];

    const rows = products.map((product) => [
      product.name,
      product.productNo,
      product.category,
      product.date,
      product.price,
      product.status,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "products.csv";
    link.click();

    URL.revokeObjectURL(url);
    setIsExportOpen(false);
  };

  
  const exportExcel = async () => {
    const XLSX = await import("xlsx");

    const excelData = products.map((product) => ({
      "Product Name": product.name,
      "Product No": product.productNo,
      Category: product.category,
      Date: product.date,
      Price: product.price,
      Status: product.status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Products"
    );

    XLSX.writeFile(workbook, "products.xlsx");

    setIsExportOpen(false);
  };

  
  const exportPDF = async () => {
    const jsPDFModule = await import("jspdf");
    const autoTableModule = await import("jspdf-autotable");

    const { default: jsPDF } = jsPDFModule;

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Products", 14, 15);

    const tableData = products.map((product) => [
      product.name,
      product.productNo,
      product.category,
      product.date,
      product.price,
      product.status,
    ]);

    autoTableModule.default(doc, {
      head: [
        [
          "Product Name",
          "Product No",
          "Category",
          "Date",
          "Price",
          "Status",
        ],
      ],
      body: tableData,
      startY: 25,
      styles: {
        fontSize: 8,
      },
      headStyles: {
        fillColor: [16, 185, 129],
      },
    });

    doc.save("products.pdf");

    setIsExportOpen(false);
  };

  
  const printProducts = () => {
    const printWindow = window.open("", "_blank");

    if (!printWindow) return;

    const rows = products
      .map(
        (product) => `
          <tr>
            <td>${product.name}</td>
            <td>${product.productNo}</td>
            <td>${product.category}</td>
            <td>${product.date}</td>
            <td>${product.price}</td>
            <td>${product.status}</td>
          </tr>
        `
      )
      .join("");

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Products</title>

          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
            }

            h1 {
              margin-bottom: 20px;
            }

            table {
              width: 100%;
              border-collapse: collapse;
            }

            th,
            td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }

            th {
              background: #10b981;
              color: white;
            }
          </style>
        </head>

        <body>
          <h1>Products</h1>

          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product No</th>
                <th>Category</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              ${rows}
            </tbody>
          </table>

          <script>
            window.onload = function () {
              window.print();
            };
          </script>
        </body>
      </html>
    `);

    printWindow.document.close();

    setIsExportOpen(false);
  };

  return (
    <div className="mb-4">
      
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Products
        </h1>

        <div className="flex items-center gap-3">
          
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setIsExportOpen((open) => !open)
              }
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Download className="h-4 w-4" />

              Export

              <ChevronDown
                className={`h-3.5 w-3.5 text-gray-400 transition-transform ${
                  isExportOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isExportOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg">
                
                <button
                  type="button"
                  onClick={printProducts}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <Printer className="h-4 w-4 text-gray-500" />
                  Print
                </button>

                
                <button
                  type="button"
                  onClick={exportExcel}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <FileSpreadsheet className="h-4 w-4 text-gray-500" />
                  Excel
                </button>

                
                <button
                  type="button"
                  onClick={exportPDF}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <FileText className="h-4 w-4 text-gray-500" />
                  PDF
                </button>

                
                <button
                  type="button"
                  onClick={exportCSV}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <FileType className="h-4 w-4 text-gray-500" />
                  CSV
                </button>
              </div>
            )}
          </div>

          
          <button
            type="button"
            onClick={onAddNew}
            className="flex items-center justify-center rounded-lg bg-emerald-500 p-2.5 text-white hover:bg-emerald-600"
            aria-label="Add product"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      
      <div className="mb-4 flex items-center gap-6 border-b border-gray-100">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onTabChange(tab.key)}
              className={`relative flex items-center gap-1.5 pb-3 text-sm font-medium transition-colors ${
                isActive
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}

              <span
                className={`text-xs ${
                  isActive
                    ? "text-emerald-500"
                    : "text-gray-400"
                }`}
              >
                {counts[tab.key]}
              </span>

              {isActive && (
                <span className="absolute -bottom-px left-0 h-0.5 w-full rounded-full bg-emerald-500" />
              )}
            </button>
          );
        })}
      </div>

      
      <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setIsFilterOpen((open) => !open)
            }
            className={`flex items-center justify-center rounded-lg border p-2 hover:bg-gray-50 ${
              isFilterOpen
                ? "border-emerald-400 text-emerald-600"
                : "border-gray-200 text-gray-500"
            }`}
            aria-label="Filters"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>

          <FilterPopover
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            categories={categories}
            filters={filters}
            onApply={onFiltersApply}
          />
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          Actions

          <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default ProductsToolbar;