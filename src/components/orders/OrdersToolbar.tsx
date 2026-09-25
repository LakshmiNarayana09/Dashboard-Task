
import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Download,
  ChevronDown,
  Printer,
  FileSpreadsheet,
  FileText,
  FileType,
} from "lucide-react";
import type { Order, OrderTab, OrderTabCounts } from "../../types/orders";

interface OrdersToolbarProps {
  activeTab: OrderTab;
  onTabChange: (tab: OrderTab) => void;
  counts: OrderTabCounts;
  searchValue: string;
  onSearchChange: (value: string) => void;
  orders: Order[];
}

const TABS: { key: OrderTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "pending", label: "Pending" },
  { key: "processing", label: "Processing" },
  { key: "refunded", label: "Refunded" },
];

export const OrdersToolbar: React.FC<OrdersToolbarProps> = ({
  activeTab,
  onTabChange,
  counts,
  searchValue,
  onSearchChange,
  orders,
}) => {
  const [isExportOpen, setIsExportOpen] = useState(false);

  const exportCSV = () => {
    const headers = ["Order No", "Customer", "Date", "Total", "Payment", "Status"];
    const rows = orders.map((o) => [o.orderNo, o.customer, o.date, o.total, o.payment, o.status]);
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "orders.csv";
    link.click();
    URL.revokeObjectURL(url);
    setIsExportOpen(false);
  };

  const exportExcel = async () => {
    const XLSX = await import("xlsx");
    const excelData = orders.map((o) => ({
      "Order No": o.orderNo,
      Customer: o.customer,
      Date: o.date,
      Total: o.total,
      Payment: o.payment,
      Status: o.status,
    }));
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
    XLSX.writeFile(workbook, "orders.xlsx");
    setIsExportOpen(false);
  };

  const exportPDF = async () => {
    const jsPDFModule = await import("jspdf");
    const autoTableModule = await import("jspdf-autotable");
    const { default: jsPDF } = jsPDFModule;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Orders", 14, 15);
    const tableData = orders.map((o) => [o.orderNo, o.customer, o.date, o.total, o.payment, o.status]);
    autoTableModule.default(doc, {
      head: [["Order No", "Customer", "Date", "Total", "Payment", "Status"]],
      body: tableData,
      startY: 25,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [16, 185, 129] },
    });
    doc.save("orders.pdf");
    setIsExportOpen(false);
  };

  const printOrders = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    const rows = orders
      .map(
        (o) => `
          <tr>
            <td>${o.orderNo}</td>
            <td>${o.customer}</td>
            <td>${o.date}</td>
            <td>${o.total}</td>
            <td>${o.payment}</td>
            <td>${o.status}</td>
          </tr>
        `
      )
      .join("");
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Orders</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { margin-bottom: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background: #10b981; color: white; }
          </style>
        </head>
        <body>
          <h1>Orders</h1>
          <table>
            <thead>
              <tr><th>Order No</th><th>Customer</th><th>Date</th><th>Total</th><th>Payment</th><th>Status</th></tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
          <script>window.onload = function () { window.print(); };</script>
        </body>
      </html>
    `);
    printWindow.document.close();
    setIsExportOpen(false);
  };

  return (
    <div className="mb-4">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsExportOpen((open) => !open)}
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <Download className="h-4 w-4" />
            Export
            <ChevronDown
              className={`h-3.5 w-3.5 text-gray-400 transition-transform ${isExportOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isExportOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg">
              <button
                type="button"
                onClick={printOrders}
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
                isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
              <span className={`text-xs ${isActive ? "text-emerald-500" : "text-gray-400"}`}>
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
            placeholder="Search order.."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </div>
        <button
          type="button"
          className="flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-gray-50"
          aria-label="Filters"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </button>
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

export default OrdersToolbar;