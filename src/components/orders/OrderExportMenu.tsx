
import React, { useState } from "react";
import { Download, ChevronDown, Printer, FileSpreadsheet, FileText, FileType } from "lucide-react";
import type { OrderDetail } from "../../types/orders";

interface OrderExportMenuProps {
  order: OrderDetail;
}

export const OrderExportMenu: React.FC<OrderExportMenuProps> = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  const exportCSV = () => {
    const headers = ["Order No", "Customer", "Amount", "Payment Status", "Fulfilment Status"];
    const row = [
      order.orderNo,
      order.customer.name,
      order.amount,
      order.paymentStatus,
      order.fulfilmentStatus,
    ];
    const csvContent = [headers.join(","), row.map((v) => `"${v}"`).join(",")].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `order-${order.orderNo}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    setIsOpen(false);
  };

  const exportExcel = async () => {
    const XLSX = await import("xlsx");
    const worksheet = XLSX.utils.json_to_sheet([
      {
        "Order No": order.orderNo,
        Customer: order.customer.name,
        Amount: order.amount,
        "Payment Status": order.paymentStatus,
        "Fulfilment Status": order.fulfilmentStatus,
      },
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Order");
    XLSX.writeFile(workbook, `order-${order.orderNo}.xlsx`);
    setIsOpen(false);
  };

  const exportPDF = async () => {
    const jsPDFModule = await import("jspdf");
    const autoTableModule = await import("jspdf-autotable");
    const { default: jsPDF } = jsPDFModule;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Order #${order.orderNo}`, 14, 15);
    autoTableModule.default(doc, {
      head: [["Customer", "Amount", "Payment Status", "Fulfilment Status"]],
      body: [[order.customer.name, order.amount, order.paymentStatus, order.fulfilmentStatus]],
      startY: 25,
      headStyles: { fillColor: [16, 185, 129] },
    });
    doc.save(`order-${order.orderNo}.pdf`);
    setIsOpen(false);
  };

  const printOrder = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Order #${order.orderNo}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 12px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background: #10b981; color: white; }
          </style>
        </head>
        <body>
          <h1>Order #${order.orderNo}</h1>
          <table>
            <thead>
              <tr><th>Customer</th><th>Amount</th><th>Payment Status</th><th>Fulfilment Status</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>${order.customer.name}</td>
                <td>${order.amount}</td>
                <td>${order.paymentStatus}</td>
                <td>${order.fulfilmentStatus}</td>
              </tr>
            </tbody>
          </table>
          <script>window.onload = function () { window.print(); };</script>
        </body>
      </html>
    `);
    printWindow.document.close();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <Download className="h-4 w-4" />
        Export
        <ChevronDown className={`h-3.5 w-3.5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg">
          <button type="button" onClick={printOrder} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
            <Printer className="h-4 w-4 text-gray-500" />
            Print
          </button>
          <button type="button" onClick={exportExcel} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
            <FileSpreadsheet className="h-4 w-4 text-gray-500" />
            Excel
          </button>
          <button type="button" onClick={exportPDF} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
            <FileText className="h-4 w-4 text-gray-500" />
            PDF
          </button>
          <button type="button" onClick={exportCSV} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
            <FileType className="h-4 w-4 text-gray-500" />
            CSV
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderExportMenu;